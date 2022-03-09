import Sorter from './Sorter';

class CharactersCollection extends Sorter {
  constructor(protected collection: string) {
    super();
  }

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
