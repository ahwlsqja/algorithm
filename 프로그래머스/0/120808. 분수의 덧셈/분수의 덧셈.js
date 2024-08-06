// 최대공약수 함수
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수 함수
function lcm(num1, num2) {
    return (num1 * num2) / gcd(num1, num2);
}

function solution(numer1, denom1, numer2, denom2) {
    let abc = lcm(denom1, denom2); // 두 분모의 최소공배수
    let numer1prime = abc / denom1; // 첫 번째 분자의 새로운 분자
    let numer2prime = abc / denom2; // 두 번째 분자의 새로운 분자
    let numeratorSum = numer1 * numer1prime + numer2 * numer2prime; // 분자 합산

    // 결과를 기약분수로 만들기
    let commonDivisor = gcd(numeratorSum, abc);
    return [numeratorSum / commonDivisor, abc / commonDivisor];
}
