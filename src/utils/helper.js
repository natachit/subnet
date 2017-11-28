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
        return ((+elem).toString(2));
    });
    return ip2.join('.');
}