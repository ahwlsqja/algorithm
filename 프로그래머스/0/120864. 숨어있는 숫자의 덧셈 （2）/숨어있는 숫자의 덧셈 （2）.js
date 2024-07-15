function solution(my_string) {
    // 정규 표현식을 사용하여 숫자 그룹을 추출합니다.
    let numbers = my_string.match(/\d+/g);
    
    // 숫자 그룹이 없는 경우 0을 반환합니다.
    if (numbers === null) {
        return 0;
    }
    
    // 추출된 숫자 문자열을 숫자로 변환하고 합산합니다.
    let sum = numbers.reduce((acc, num) => acc + Number(num), 0);
    
    return sum;
}

// 예시 테스트
console.log(solution("aAb1B2cC34oOp")); // 37
console.log(solution("1a2b3c4d123Z"));  // 133
console.log(solution("noNumbersHere")); // 0
