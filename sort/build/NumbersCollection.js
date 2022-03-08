"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumbersCollection {
    constructor(collection) {
        this.collection = collection;
    }
    get length() {
        return this.collection.length;
    }
    compare(leftIndex, rightIndex) {
        return this.collection[leftIndex] > this.collection[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.collection[leftIndex];
        this.collection[leftIndex] = this.collection[rightIndex];
        this.collection[rightIndex] = leftHand;
    }
    print() {
        console.log(this.collection);
    }
}
exports.default = NumbersCollection;
