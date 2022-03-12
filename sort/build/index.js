"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
const LinkedLists_1 = require("./LinkedLists");
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
const numbersCollection = new NumbersCollection_1.default([10, 8, -5, 44, 0]);
const charsCollection = new CharactersCollection_1.default('aAsdzxcasASDZXC');
const linkedList = new LinkedLists_1.LinkedList();
linkedList.add(800);
linkedList.add(10);
linkedList.add(18);
linkedList.add(-2);
linkedList.add(-100);
numbersCollection.sort();
charsCollection.sort();
numbersCollection.print();
charsCollection.print();
linkedList.print();