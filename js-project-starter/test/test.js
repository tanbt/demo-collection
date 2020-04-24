import 'chai/register-expect.js';
import {sum} from '../src/sum.js';

describe('Calculator', function() {

  describe('Sum calculation', function() {
    it('should return -1 when the value is not present', function() {
      expect(sum(1,3)).to.be.equal(4);
    });
  });

});