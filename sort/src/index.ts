import CharactersCollection from './CharactersCollection';
import { LinkedList } from './LinkedLists';
import NumbersCollection from './NumbersCollection';
import Sorter from './Sorter';

const numbersCollection = new NumbersCollection([10, 8, -5, 44, 0]);
const charsCollection = new CharactersCollection('aAsdzxcasASDZXC');
const linkedList = new LinkedList();
linkedList.add(800);
linkedList.add(10);
linkedList.add(18);
linkedList.add(-2);
linkedList.add(-100);

numbersCollection.sort();
charsCollection.sort();
numbersCollection.print();
charsCollection.print();
linkedList.print();