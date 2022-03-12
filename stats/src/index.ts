import CsvFileReader from './CsvFileReader';
import MatchReader from './MatchReader';
import { matchResult } from './MatchResults';

let manUnitWins = 0;

const matches = new MatchReader('football.csv');

matches.read();

for (let match of matches.getData) {
  if (
    (match[1] === 'Man United' && match[5] === matchResult.homeWin) ||
    (match[2] === 'Man United' && match[5] === matchResult.awayWin)
  ) {
    manUnitWins++;
  }
}

console.log(`Man United Won: ${manUnitWins} Games`);

// const dateData = matches.getData.map(item => item[0]);

// console.log(dateData.map(date => dateStringToDate(date)));
