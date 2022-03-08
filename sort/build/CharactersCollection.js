"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharactersCollection {
    constructor(collection) {
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
}
exports.default = CharactersCollection;
