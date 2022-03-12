import matchData from '../MatchData';
import { matchResult } from '../MatchResults';
import { Analyzer } from '../Summary';

class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: matchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (
        (match[1] === 'Man United' && match[5] === matchResult.homeWin) ||
        (match[2] === 'Man United' && match[5] === matchResult.awayWin)
      ) {
        wins++;
      }
    }

    return `${this.team} won: ${wins} games.`;
  }
}

export default WinsAnalysis;
