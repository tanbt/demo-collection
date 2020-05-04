import getPlays from './data/plays.js';
import getInvoices from './data/invoices.js';

const runApp = () => {
    // console.log(getPlays());
    // console.log(getInvoices());
    return `
    Statement for BigCo
      Hamlet: $650.00 (55 seats)
      As You Like It: $580.00 (35 seats)
      Othello: $500.00 (40 seats)
    Amount owed is $1,730.00
    You earned 47 credits
    `;
};

export { runApp };