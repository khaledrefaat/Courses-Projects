import { dateStringToDate } from './utils';
import { matchResult } from './MatchResults';
import matchData from './MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

class MatchReader {
  matches: matchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): matchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        +row[3],
        +row[4],
        row[5] as matchResult,
        row[6],
      ];
    });
  }
}

export default MatchReader;
