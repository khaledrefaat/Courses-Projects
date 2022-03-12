"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = __importDefault(require("./MatchReader"));
const MatchResults_1 = require("./MatchResults");
let manUnitWins = 0;
const matches = new MatchReader_1.default('football.csv');
matches.read();
for (let match of matches.getData) {
    if ((match[1] === 'Man United' && match[5] === MatchResults_1.matchResult.homeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResults_1.matchResult.awayWin)) {
        manUnitWins++;
    }
}
console.log(`Man United Won: ${manUnitWins} Games`);
// const dateData = matches.getData.map(item => item[0]);
// console.log(dateData.map(date => dateStringToDate(date)));
