import fs from 'fs';
import { matchResult } from './MatchResults';
import { dateStringToDate } from './utils';

type matchData = [Date, string, string, number, number, matchResult, string];

class CsvFileReader {
  private data: matchData[] = [];
  constructor(private fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row: string[]): matchData => {
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

  get getData() {
    return this.data;
  }
}

export default CsvFileReader;
