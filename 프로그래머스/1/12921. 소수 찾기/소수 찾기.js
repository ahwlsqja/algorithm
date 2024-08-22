function solution(n) {
    if (n < 2) return 0; // 소수가 없으므로 0 반환
    let result = 1; // 2는 소수이므로 1로 초기화

    for (let i = 3; i <= n; i += 2) {
        let isPrime = true; // 기본적으로 소수로 가정
        for (let j = 3; j <= Math.sqrt(i); j += 2) { // 홀수만 체크
            if (i % j === 0) {
                isPrime = false // 소수가 아님
                break; // 더 이상 검사할 필요 없음
            }
        }
        if (isPrime) {
            result +=1
        }
    }
    return result;
}
