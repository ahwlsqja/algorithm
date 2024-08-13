function solution(myString, pat) {
    let count = 0; // 패턴의 등장 횟수를 세기 위한 변수

    // myString의 각 인덱스에서 pat의 길이만큼 잘라서 비교
    for (let i = 0; i <= myString.length - pat.length; i++) {
        // 현재 인덱스에서 pat의 길이만큼 잘라낸 부분 문자열
        const substring = myString.slice(i, i + pat.length);
        
        // 잘라낸 부분 문자열이 pat과 같으면 카운트 증가
        if (substring === pat) {
            count++;
        }
    }

    return count; // 최종 카운트 반환
}

// 예시 테스트
console.log(solution("banana", "ana")); // 2
console.log(solution("aaaa", "aa")); // 3
