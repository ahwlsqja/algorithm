function solution(a, b) {
    let strings = parseInt(String(a) + String(b))
    let sum = 2*a*b;

    return strings >= sum ? strings : sum;
}