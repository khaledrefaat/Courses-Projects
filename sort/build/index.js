"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
const Sorter_1 = __importDefault(require("./Sorter"));
const numbersCollection = new NumbersCollection_1.default([10, 8, -5, 44, 0]);
const sorter = new Sorter_1.default(numbersCollection);
console.log(numbersCollection.collection);
sorter.sort();
console.log(numbersCollection.collection);
