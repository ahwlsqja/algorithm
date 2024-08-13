function solution(myString, pat) {
    const patLength = pat.length;
    const myStringLength = myString.length;
    let longestSubstring = "";

    for (let i = 0; i < myStringLength; i++) {
        // 현재 위치에서 pat이 끝나는지 확인
        if (myString.substring(i, i + patLength) === pat) {
            // 현재 위치까지의 부분 문자열을 저장
            const currentSubstring = myString.substring(0, i + patLength);
            // 가장 긴 부분 문자열을 업데이트
            if (currentSubstring.length > longestSubstring.length) {
                longestSubstring = currentSubstring;
            }
        }
    }

    return longestSubstring;
}

// 예시 테스트
console.log(solution("AbCdEFG", "dE"));  // "AbCdE"
console.log(solution("AAAAaaaa", "a"));  // "AAAAaaaa"
