import NumbersCollection from './NumbersCollection';
import Sorter from './Sorter';

const numbersCollection = new NumbersCollection([10, 8, -5, 44, 0]);
const sorter = new Sorter(numbersCollection);

console.log(numbersCollection.collection);
sorter.sort();
console.log(numbersCollection.collection);
