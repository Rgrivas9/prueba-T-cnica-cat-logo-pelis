"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newSample_json_1 = __importDefault(require("../../../data/newSample.json"));
const newAndOrderData = () => {
    return addIdData(orderByTitle());
};
const addIdData = (list) => {
    return list.map((show, index) => ({ data: { ...show }, id: index + 1 }));
};
const orderByTitle = () => {
    const orderedSample = [];
    newSample_json_1.default
        .map(show => show.title)
        .sort()
        .forEach(title => {
        orderedSample.push(newSample_json_1.default.find(show => show.title == title));
    });
    return orderedSample;
};
exports.default = newAndOrderData;
