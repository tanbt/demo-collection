import 'chai/register-expect.js';
import getPlays from '../src/data/plays.js';
import getInvoices from '../src/data/invoices.js';

describe('Sample data', function () {

  it('should has valid Plays data', function () {
    const data = getPlays();
    expect(data.hasOwnProperty('hamlet')).to.be.true;
    expect(data.hasOwnProperty('as-like')).to.be.true;
    expect(data.hasOwnProperty('othello')).to.be.true;
  });

  it('should has valid Invoices data', function () {
    const data = getInvoices()[0];
    expect(data.hasOwnProperty('customer')).to.be.true;
    expect(data.performances.length).to.be.equal(3);
  });

});