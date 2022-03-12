import CsvFileReader from './CsvFileReader';
import { matchResult } from './MatchResults';

let manUnitWins = 0;

const matches = new CsvFileReader('football.csv');

matches.read();

for (let match of matches.getData) {
  if (
    (match[1] === 'Man United' && match[5] === matchResult.homeWin) ||
    (match[2] === 'Man United' && match[5] === matchResult.awayWin)
  ) {
    manUnitWins++;
  }
}
// const dateData = matches.getData.map(item => item[0]);

// console.log(dateData.map(date => dateStringToDate(date)));
