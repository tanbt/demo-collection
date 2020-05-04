import 'chai/register-expect.js';
import {sum} from '../src/sum.js';

describe('Calculator', function() {

  describe('Sum calculation', function() {
    it('should calculate normally', function() {
      expect(sum(1,3)).to.be.equal(4);
    });
    it('should calculate negative numbers', function() {
      expect(sum(1,-3)).to.be.equal(-2);
    });
    it('should calculate float numbers', function() {
      expect(sum(1,-3.4)).to.be.equal(-2.4);
    });
    it('should return undefined for non-numbers', function() {
      expect(sum(1,'a')).to.be.undefined;
    });
  });

});