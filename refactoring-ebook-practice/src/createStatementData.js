import PerformanceCalculator from './PerformanceCalculator.js';

export default function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerformance(aPerformance) {
    const calculator = new PerformanceCalculator(aPerformance, playFor(aPerformance));
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  };

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);

    if ('comedy' === aPerformance.play.type) {
      result += Math.floor(aPerformance.audience / 5);
    }
    return result;
  }

  function totalVolumeCredits(data) {
    let volumeCredits = 0;
    for (let perf of data.performances) {
      volumeCredits += perf.volumeCredits;
    }
    return volumeCredits;
  }

  function totalAmount(data) {
    let result = 0;
    for (let perf of data.performances) {
      result += perf.amount;
    }
    return result;
  }
};
