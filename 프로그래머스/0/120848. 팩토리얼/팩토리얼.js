function solution(n) {
    let k = 1;
    while (pact(k) <= n) {
        k += 1;
    }
    return k - 1; // 마지막에 1을 빼줍니다.
}

function pact(k) {
    let x = 1;
    for (let i = k; i > 0; i--) {
        x *= i;
    }
    return x;
}

// 예시 테스트
console.log(solution(1));    // 1
console.log(solution(2));    // 2
console.log(solution(6));    // 3
console.log(solution(24));   // 4
console.log(solution(120));  // 5
