import { Sortable } from './Sorter';

class CharactersCollection implements Sortable {
  constructor(private collection: string) {}

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return (
      this.collection[leftIndex].toLowerCase() >
      this.collection[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
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

export default CharactersCollection;
