function solution(n) {
    let arr = [];
    
    while (n !== 1) {
        arr.push(n); // 현재 n 값을 배열에 추가
        if (n % 2 === 0) {
            n = n / 2; // n이 짝수인 경우 n을 반으로 나누기
        } else {
            n = 3 * n + 1; // n이 홀수인 경우 3n + 1
        }
    }
    
    arr.push(1); // 마지막에 1 추가
    return arr;
}

// 예시 사용
const result = solution(6);
console.log(result); // [6, 3, 10, 5, 16, 8, 4, 2, 1]
