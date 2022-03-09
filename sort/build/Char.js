"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringCollection {
    constructor(collection) {
        this.collection = collection;
    }
    get length() {
        return this.collection.length;
    }
    compare(leftIndex, rightIndex) {
        return true;
    }
    swap(leftIndex, rightIndex) { }
}
exports.default = StringCollection;
