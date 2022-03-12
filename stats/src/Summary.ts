import matchData from './MatchData';

export interface Analyzer {
  run(matches: matchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: matchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
