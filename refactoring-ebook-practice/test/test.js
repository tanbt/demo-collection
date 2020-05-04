import 'chai/register-expect.js';
import {runApp} from '../src/app.js';

describe('Invoice calculator', function() {

  it('should print correct invoice details', function() {
    const result = runApp();
    expect(result).to.be.equal(`
    Statement for BigCo
      Hamlet: $650.00 (55 seats)
      As You Like It: $580.00 (35 seats)
      Othello: $500.00 (40 seats)
    Amount owed is $1,730.00
    You earned 47 credits
    `);
  });

});