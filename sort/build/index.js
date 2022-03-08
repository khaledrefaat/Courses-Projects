"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
const sorter = new Sorter_1.default([10, 8, -5, 44, 0]);
console.log(sorter);
sorter.sort();
console.log(sorter.collection);
