function solution(before, after) {
    // 두 문자열을 각각 정렬합니다.
    let sortedBefore = before.split("").sort().join("");
    let sortedAfter = after.split("").sort().join("");
    
    // 정렬된 문자열이 같으면 1을, 다르면 0을 반환합니다.
    if (sortedBefore === sortedAfter) {
        return 1;
    } else {
        return 0;
    }
}

// 예시 테스트
console.log(solution("olleh", "hello")); // 1
console.log(solution("allpe", "apple")); // 0
