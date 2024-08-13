function solution(intStrs, k, s, l) {
    const result = []; // 결과를 담을 배열

    for (let str of intStrs) {
        // s번 인덱스에서 시작하여 길이 l짜리 부분 문자열 추출
        const substring = str.slice(s, s + l);
        // 부분 문자열을 정수로 변환
        const num = parseInt(substring, 10);
        
        // 변환한 정수가 k보다 큰 경우에만 결과 배열에 추가
        if (num > k) {
            result.push(num);
        }
    }

    return result; // 최종 결과 반환
}

// 예시 테스트
console.log(solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)); // [56789, 99999]
