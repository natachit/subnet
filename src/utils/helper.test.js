import { convertToSubnet, tenToBinary } from './helper';
import { expect } from 'chai';

describe('convert subnet test', () => {
    it('convert subnet test', () => {
        expect(convertToSubnet(32)).to.equal('255.255.255.255');
        expect(convertToSubnet(1)).to.equal('128.0.0.0');
    })
})

describe('convert ten to binary', () => {
    it('convert ten to binary', () => {
        expect(tenToBinary('255.255.255.255')).to.equal('11111111.11111111.11111111.11111111');
        expect(tenToBinary('255.254.0.0')).to.equal('11111111.11111110.00000000.00000000');
        expect(tenToBinary('255.248.0.0')).to.equal('11111111.11111000.00000000.00000000');
    })
})