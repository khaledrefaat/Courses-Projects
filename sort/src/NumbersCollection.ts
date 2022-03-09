import Sorter from './Sorter';

class NumbersCollection extends Sorter {
  constructor(protected collection: number[]) {
    super();
  }

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex] > this.collection[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.collection[leftIndex];
    this.collection[leftIndex] = this.collection[rightIndex];
    this.collection[rightIndex] = leftHand;
  }

  print() {
    console.log(this.collection);
  }
}

export default NumbersCollection;
