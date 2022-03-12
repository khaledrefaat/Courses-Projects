"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResults_1 = require("../MatchResults");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if ((match[1] === 'Man United' && match[5] === MatchResults_1.matchResult.homeWin) ||
                (match[2] === 'Man United' && match[5] === MatchResults_1.matchResult.awayWin)) {
                wins++;
            }
        }
        return `${this.team} won: ${wins} games.`;
    }
}
exports.default = WinsAnalysis;
