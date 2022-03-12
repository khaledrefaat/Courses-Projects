import CsvFileReader from './CsvFileReader';
import { matchResult } from './MatchResults';
import { dateStringToDate } from './utils';

type MatchData = [Date, string, string, number, number, matchResult, string];

class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      +row[3],
      +row[4],
      row[5] as matchResult,
      row[6],
    ];
  }
}

export default MatchReader;
