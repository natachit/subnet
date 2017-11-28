import { plus } from './helper';
import { expect } from 'chai';

describe('plus test', () => {
    it('should return x + y', () => {
        expect(plus(1, 2)).to.equal(3);
    });
})