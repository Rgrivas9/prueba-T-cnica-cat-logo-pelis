"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = __importStar(require("puppeteer"));
const sample = __importStar(require("../../data/sample.json"));
const fs = __importStar(require("fs"));
const scrapping = async (show, title) => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'],
    });
    const page = await browser.newPage();
    await page.goto('https://www.filmaffinity.com/es/main.html');
    await page.waitForTimeout(1500);
    await page.click('.css-v43ltw');
    await page.waitForTimeout(500);
    await page.type('#top-search-input', title);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    const mainTitle = await page.$eval('h1', node => {
        return node.innerHTML;
    });
    if (mainTitle.includes('Búsqueda de')) {
        const years = await page.$$eval('.ye-w', (nodes) => {
            return nodes.map(n => [
                n.innerHTML,
                n.nextElementSibling
                    ?.querySelector('div')
                    ?.getAttribute('data-movie-id'),
            ]);
        });
        await page.waitForTimeout(1000);
        const movieID = years.find(id => id[0] == show.releaseYear.toString());
        await page.goto(`https://www.filmaffinity.com/es/film${movieID[1]}.html`);
        await page.waitForTimeout(1000);
    }
    const description = await page.$eval('[itemprop="description"]', node => {
        return node.innerHTML.replace('(FILMAFFINITY)', '').trim();
    });
    const image = await page.$eval('a.lightbox', node => {
        return node.href;
    });
    await browser.close();
    const newShow = {
        ...show,
        description: description,
        images: {
            ...show.images,
            ['Poster Art']: { ...show.images['Poster Art'], url: image },
        },
    };
    return newShow;
};
const completedArray = async () => {
    const newArray = [];
    const failArray = [];
    let index = 0;
    let fail = 0;
    for (const show of sample.entries) {
        try {
            const newShow = await scrapping(show, show.title.toLowerCase());
            index++;
            newArray.push(newShow);
            console.log(`${index}of${sample.entries.length}✅`);
        }
        catch (error) {
            try {
                const newShow = await scrapping(show, show.title.split(' ').slice(0, 2).join(' ').toLowerCase());
                index++;
                newArray.push(newShow);
                console.log(`${index}of${sample.entries.length}✅`);
            }
            catch (error) {
                try {
                    const newShow = await scrapping(show, show.title.split(' ')[0].slice(0, 5).toLowerCase());
                    index++;
                    newArray.push(newShow);
                    console.log(`${index}of${sample.entries.length}✅`);
                }
                catch (error) {
                    console.log('fail🔴', show.title);
                    fail++;
                    failArray.push(show);
                    console.log(`${fail}of${sample.entries.length}💥`);
                }
            }
        }
    }
    const newSample = JSON.stringify(newArray);
    const fails = JSON.stringify(failArray);
    fs.writeFile('newSample.json', newSample, () => {
        console.log('Created 💚💛');
    });
    fs.writeFile('fails.json', fails, () => {
        console.log('Created 💚💛');
    });
};
completedArray();
