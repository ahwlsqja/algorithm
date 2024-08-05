function gcd(x, y) {
    while (y) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function solution(a, b) {
    // 1. 최대공약수(GCD)를 구합니다.
    const divisor = gcd(a, b);
    a /= divisor; // 기약분수의 분자
    b /= divisor; // 기약분수의 분모

    // 2. b의 소인수를 2와 5로 나눈 후 확인
    while (b % 2 === 0) {
        b /= 2;
    }
    while (b % 5 === 0) {
        b /= 5;
    }

    // 3. b가 1이면 유한소수, 그렇지 않으면 무한소수
    return b === 1 ? 1 : 2;
}
