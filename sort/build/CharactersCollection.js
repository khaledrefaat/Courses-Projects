"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
class CharactersCollection extends Sorter_1.default {
    constructor(collection) {
        super();
        this.collection = collection;
    }
    get length() {
        return this.collection.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.collection[leftIndex].toLowerCase() >
            this.collection[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const chars = this.collection.split('');
        const leftHand = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftHand;
        this.collection = chars.join('');
    }
    print() {
        console.log(this.collection);
    }
}
exports.default = CharactersCollection;
