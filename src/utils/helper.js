export const convertToSubnet = (mask) => {
    const subnet = [0, 0, 0, 0].map(() => {
        const sub = '00000000'.split('').map(() => {
            mask -=1;
            return mask >=0 ? '1' : '0';
        })
        return parseInt(sub.join(''), 2);
    });
    return subnet.join('.');
}

export const tenToBinary = (ip) => {
    const ip2 = ip.split('.').map((elem) => {
        const tmp = (+elem).toString(2);
        return '0'.repeat(8-tmp.length) + tmp;
    })
    return ip2.join('.');
}

export const getNetworkAddress = (ip, mask) => {
    ip = tenToBinary(ip).split('.').join('');
    let output = ip.substr(0, mask)+'0'.repeat(32-mask);
    output = output.match(/.{8}/g);
    const netaddr = output.map((elem) => {
        return parseInt((+elem),2)
    })
    return netaddr.join('.');
}

export const ipRange = (ip, mask) => {
    netaddr = getNetworkAddress(ip, mask);
}

export const wildCard = (mask) => {
    const subnet = [0, 0, 0, 0].map(() => {
        const sub = '00000000'.split('').map(() => {
            mask -=1;
            return mask >=0 ? '0' : '1';
        })
        return parseInt(sub.join(''), 2);
    });
    return subnet.join('.');
}

export const ipClass = (mask) => {
    if (mask < 8) {
        return 'None';
    } else if (mask < 16) {
        return 'A';
    } else if (mask < 24) {
        return 'B';
    } else {
        return 'C';
    }
}

export const cidr = (mask) => {
    return '/'+mask.toString();
}

export const short = (ip, mask) => {
    return ip+cidr(mask);
}

export const binaryId = (ip) => {
    return tenToBinary(ip).split('.').join('');
}

export const integerId = (ip) => {
    return parseInt(binaryId(ip),2);
}

export const hexId = (ip) => {
    return integerId(ip).toString(16);
}

export const ipType = (ip) => {
    ip = binaryId(ip);
    if (ip >= 1010000000000000000000000000 && ip <= 1010111111111111111111111111) {
        return 'Private';
    } else if (ip >= 10101100000100000000000000000000 && ip <= 10101100000111111111111111111111) {
        return 'Private';
    } else if (ip >= 11000000101010000000000000000000 && ip <= 110000001010100001111111111111111) {
        return 'Private';
    } else {
        return 'Public';
    }
}