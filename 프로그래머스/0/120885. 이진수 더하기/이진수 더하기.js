function solution(bin1, bin2) {
    bin1 = parseInt(bin1, 2); // === "123"
    bin2 = parseInt(bin2, 2); // === "123"
    let addbins = bin1 + bin2;
    return addbins.toString(2)
    
}