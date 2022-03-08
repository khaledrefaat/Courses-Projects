import CharactersCollection from './CharactersCollection';
import NumbersCollection from './NumbersCollection';
import Sorter from './Sorter';

const numbersCollection = new NumbersCollection([10, 8, -5, 44, 0]);
const charsCollection = new CharactersCollection('aAsdzxcasASDZXC');
const sorterNumbers = new Sorter(numbersCollection);
const sorterChars = new Sorter(charsCollection);

console.log(numbersCollection.collection);
console.log(sorterChars.collection);
sorterNumbers.sort();
sorterChars.sort();
console.log(numbersCollection.collection);
console.log(sorterChars.collection);
