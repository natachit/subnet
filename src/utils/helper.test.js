import { convertToSubnet, tenToBinary, getNetworkAddress } from './helper';
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

describe('Get Network Address', () => {
    it('Get Network Address', () => {
        expect(getNetworkAddress('192.168.1.204',16)).to.equal('192.168.0.0');
        expect(getNetworkAddress('158.108.12.34',24)).to.equal('158.108.12.0');
        expect(getNetworkAddress('158.108.12.34',19)).to.equal('158.108.0.0');
    })
})