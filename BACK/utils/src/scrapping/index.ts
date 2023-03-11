import * as puppeteer from 'puppeteer'
import * as sample from '../../data/sample.json'
import * as fs from 'fs'
import Show from './types/show.Type'

const scrapping = async (show: Show, title: string): Promise<Show> => {
  const browser: puppeteer.Browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized'],
  })
  const page: puppeteer.Page = await browser.newPage()
  await page.goto('https://www.filmaffinity.com/es/main.html')
  await page.waitForTimeout(1500)
  await page.click('.css-v43ltw')
  await page.waitForTimeout(500)
  await page.type('#top-search-input', title)
  await page.keyboard.press('Enter')
  await page.waitForTimeout(1000)
  const mainTitle = await page.$eval('h1', node => {
    return node.innerHTML
  })
  if (mainTitle.includes('Búsqueda de')) {
    const years = await page.$$eval('.ye-w', (nodes: Element[]) => {
      return nodes.map(n => [
        n.innerHTML,
        n.nextElementSibling
          ?.querySelector('div')
          ?.getAttribute('data-movie-id'),
      ])
    })
    await page.waitForTimeout(1000)
    const movieID: string[] = years.find(
      id => id[0] == show.releaseYear.toString()
    ) as string[]
    await page.goto(`https://www.filmaffinity.com/es/film${movieID[1]}.html`)
    await page.waitForTimeout(1000)
  }
  const description = await page.$eval('[itemprop="description"]', node => {
    return node.innerHTML.replace('(FILMAFFINITY)', '').trim()
  })
  const image = await page.$eval('a.lightbox', node => {
    return node.href
  })
  await browser.close()
  const newShow: Show = {
    ...show,
    description: description,
    images: {
      ...show.images,
      ['Poster Art']: { ...show.images['Poster Art'], url: image },
    },
  }
  return newShow
}
const completedArray = async (): Promise<void> => {
  const newArray: Show[] = []
  const failArray: Show[] = []
  let index = 0
  let fail = 0
  for (const show of sample.entries) {
    try {
      const newShow: Show = await scrapping(show, show.title.toLowerCase())
      index++
      newArray.push(newShow)
      console.log(`${index}of${sample.entries.length}✅`)
    } catch (error) {
      try {
        const newShow: Show = await scrapping(
          show,
          show.title.split(' ').slice(0, 2).join(' ').toLowerCase()
        )
        index++
        newArray.push(newShow)
        console.log(`${index}of${sample.entries.length}✅`)
      } catch (error) {
        try {
          const newShow: Show = await scrapping(
            show,
            show.title.split(' ')[0].slice(0, 5).toLowerCase()
          )
          index++
          newArray.push(newShow)
          console.log(`${index}of${sample.entries.length}✅`)
        } catch (error) {
          console.log('fail🔴',show.title)
          fail++
          failArray.push(show)
          console.log(`${fail}of${sample.entries.length}💥`)
        }
      }
    }
  }
  const newSample: string = JSON.stringify(newArray)
  const fails: string = JSON.stringify(failArray)
  fs.writeFile('newSample.json', newSample, () => {
    console.log('Created 💚💛')
  })
  fs.writeFile('fails.json', fails, () => {
    console.log('Created 💚💛')
  })
}
completedArray()
