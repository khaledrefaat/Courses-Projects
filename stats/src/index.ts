import WinsAnalysis from './analyzers/WinsAnalysis';
import CsvFileReader from './CsvFileReader';
import MatchReader from './MatchReader';
import ConsoleReports from './reportTargets/ConsoleReport';
import HtmlReport from './reportTargets/HtmlReport';
import { Summary } from './Summary';

// Create an object that satisfies the 'DataReader' interface
const matches = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(matches);
matchReader.load();

let manUnitWins = 0;

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);

// const dateData = matches.getData.map(item => item[0]);

// console.log(dateData.map(date => dateStringToDate(date)));
