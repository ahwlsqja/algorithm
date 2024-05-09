function solution(n, numlist) {
    const result = numlist.filter(number => number % n === 0);
    return result;
}