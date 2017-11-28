import { convertToSubnet, tenToBinary, getNetworkAddress, wildCard, 
         ipClass, cidr, short, binaryId, integerId, hexId, ipType, broadcast, totalHost } from './helper';
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

describe('Wild card', () => {
    it('Wild card', () => {
        expect(wildCard(32)).to.equal('0.0.0.0');
        expect(wildCard(1)).to.equal('127.255.255.255');
    })
})

describe('IP Class', () => {
    it('IP Class', () => {
        expect(ipClass(8)).to.equal('A');
        expect(ipClass(16)).to.equal('B');
        expect(ipClass(32)).to.equal('C');
        expect(ipClass(7)).to.equal('None');
    })
})

describe('cidr', () => {
    it('CIDR notation', () => {
        expect(cidr(8)).to.equal('/8');
        expect(cidr(16)).to.equal('/16');
        expect(cidr(32)).to.equal('/32');
    })
})

describe('short', () => {
    it('short', () => {
        expect(short('192.168.1.254',16)).to.equal('192.168.1.254/16');
    })
})

describe('Binary ID', () => {
    it('Binary ID', () => {
        expect(binaryId('192.168.1.254')).to.equal('11000000101010000000000111111110');
    })
})

describe('Integer ID', () => {
    it('Integer ID', () => {
        expect(integerId('192.168.1.254')).to.equal(3232236030);
    })
})

describe('Hex ID', () => {
    it('Hex ID', () => {
        expect(hexId('192.168.1.254')).to.equal('c0a801fe');
    })
})

describe('IP type', () => {
    it('IP type', () => {
        expect(ipType('10.0.0.0')).to.equal('Private');
        expect(ipType('10.255.255.255')).to.equal('Private');
        expect(ipType('172.16.0.0')).to.equal('Private');
        expect(ipType('172.31.255.255')).to.equal('Private');
        expect(ipType('192.168.0.0')).to.equal('Private');
        expect(ipType('192.168.255.255')).to.equal('Private');
        expect(ipType('0.0.0.0')).to.equal('Public');
    })
})

describe('Broadcast', () => {
    it('Broadcast', () => {
        expect(broadcast('10.0.0.0',8)).to.equal('10.255.255.255');
        expect(broadcast('168.153.2.1',25)).to.equal('168.153.2.127');
    })
})

describe('Total Number of Hosts', () => {
    it('Total Number of Hosts', () => {
        expect(totalHost('10.0.0.0', 25)).to.equal(128)
        expect(totalHost('10.0.0.0', 20)).to.equal(4096)
    })
})