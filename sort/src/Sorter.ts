import NumbersCollection from './NumbersCollection';

class Sorter {
  constructor(private collection: NumbersCollection) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // if (this.collection[j] > this.collection[j + 1]) {
        //   const leftHand = this.collection[j];
        //   this.collection[j] = this.collection[j + 1];
        //   this.collection[j + 1] = leftHand;
        // } else {
        // }
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

export default Sorter;
