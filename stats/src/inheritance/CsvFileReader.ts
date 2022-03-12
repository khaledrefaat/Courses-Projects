import fs from 'fs';

abstract class CsvFileReader<T> {
  private data: T[] = [];
  constructor(private fileName: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }

  get getData() {
    return this.data;
  }
}

export default CsvFileReader;
