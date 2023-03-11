"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const finalSample_json_1 = __importDefault(require("../../../data/finalSample.json"));
const injectDB = async () => {
    for (const show of finalSample_json_1.default) {
        await fetch('http://localhost:8080/api/v1/shows', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(show),
        });
    }
    console.log('injected💚💛');
};
exports.default = injectDB;
