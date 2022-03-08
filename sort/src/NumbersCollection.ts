import { Sortable } from './Sorter';

class NumbersCollection implements Sortable {
  constructor(public collection: number[]) {}

  get length(): number {
    return this.collection.length;
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex] > this.collection[rightIndex];
  }

  public swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.collection[leftIndex];
    this.collection[leftIndex] = this.collection[rightIndex];
    this.collection[rightIndex] = leftHand;
  }
}

export default NumbersCollection;
