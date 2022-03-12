import { OutputTarget } from '../Summary';

class ConsoleReports implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}

export default ConsoleReports;
