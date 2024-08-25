function solution(n) {
    let countOnes = countBinaryOnes(n);
    while (true) {
        n++;
        if (countBinaryOnes(n) === countOnes) {
            return n;
        }
    }
}

function countBinaryOnes(num) {
    return num.toString(2).split('0').join('').length;
}
