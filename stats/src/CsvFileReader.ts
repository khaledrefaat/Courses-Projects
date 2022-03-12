import fs from 'fs';

class CsvFileReader {
  public data: string[][] = [];
  constructor(private fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }

  get getData() {
    return this.data;
  }
}

export default CsvFileReader;
