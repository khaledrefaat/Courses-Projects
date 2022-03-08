"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
const Sorter_1 = __importDefault(require("./Sorter"));
const numbersCollection = new NumbersCollection_1.default([10, 8, -5, 44, 0]);
const charsCollection = new CharactersCollection_1.default('aAsdzxcasASDZXC');
const sorterNumbers = new Sorter_1.default(numbersCollection);
const sorterChars = new Sorter_1.default(charsCollection);
console.log(numbersCollection.collection);
console.log(sorterChars.collection);
sorterNumbers.sort();
sorterChars.sort();
console.log(numbersCollection.collection);
console.log(sorterChars.collection);
