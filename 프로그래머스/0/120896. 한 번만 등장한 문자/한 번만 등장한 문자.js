function solution(s) {
    // 각 문자의 등장 횟수를 저장할 객체를 생성합니다.
    let charCount = {};
    
    // 문자열을 순회하며 각 문자의 등장 횟수를 계산합니다.
    for (let char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    // 등장 횟수가 한 번인 문자를 필터링하여 배열로 만듭니다.
    let uniqueChars = [];
    for (let char in charCount) {
        if (charCount[char] === 1) {
            uniqueChars.push(char);
        }
    }
    
    // 필터링된 문자를 사전 순으로 정렬합니다.
    uniqueChars.sort();
    
    // 정렬된 문자를 결합하여 결과 문자열을 반환합니다.
    return uniqueChars.join('');
}

// 예시 테스트
console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc"));      // "abcd"
console.log(solution("hello"));     // "eho"
