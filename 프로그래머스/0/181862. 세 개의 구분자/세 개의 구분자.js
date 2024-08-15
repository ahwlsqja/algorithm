function solution(myStr) {
    // "a", "b", "c"를 구분자로 사용하여 문자열 분리
    const parts = myStr.split(/a|b|c/);
    
    // 유효한 문자열만 필터링
    const result = parts.filter(part => part.length > 0);
    
    // 결과가 빈 배열일 경우 ["EMPTY"] 반환
    return result.length > 0 ? result : ["EMPTY"];
}

// 예시 테스트
console.log(solution("baconlettucetomato")); // ["onlettu", "etom", "to"]
console.log(solution("abcd")); // ["d"]
console.log(solution("cabab")); // ["EMPTY"]
