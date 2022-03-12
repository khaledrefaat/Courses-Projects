"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
const MatchReader_1 = __importDefault(require("./MatchReader"));
const HtmlReport_1 = __importDefault(require("./reportTargets/HtmlReport"));
const Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface
const matches = new CsvFileReader_1.default('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.default(matches);
matchReader.load();
let manUnitWins = 0;
const summary = new Summary_1.Summary(new WinsAnalysis_1.default('Man United'), new HtmlReport_1.default());
summary.buildAndPrintReport(matchReader.matches);
// const dateData = matches.getData.map(item => item[0]);
// console.log(dateData.map(date => dateStringToDate(date)));
