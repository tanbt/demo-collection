import getPlays from './data/plays.js';
import getInvoices from './data/invoices.js';
import createStatementData from './createStatementData.js';

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `\nStatement for ${data.customer}\n`;

  for (let perf of data.performances) {
    result += `  ${perf.play.name}: ${usd(perf.amount / 100)} (${perf.audience} seats)\n`;
  }
  result += `Amount owed is ${usd(data.totalAmount / 100)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
};

function renderHtml(data) {
  let result = `<h1>Statement for ${data.customer}<h1>`;
  result += "<table>\n";
  result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>\n";
  for (let perf of data.performances) {
    result += `  <tr><td>${perf.play.name}</td> <td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount / 100)}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>Amount owed is ${usd(data.totalAmount / 100)}</p>`;
  result += `<p>You earned ${data.totalVolumeCredits} credits</p>`;
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(aNumber);
}

const renderConsole = () => {
  return statement(getInvoices()[0], getPlays());
};

const printHtml = () => {
  return htmlStatement(getInvoices()[0], getPlays());
}

export { renderConsole, printHtml };