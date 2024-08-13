function solution(my_string, s, e) {
    // s부터 e까지의 부분 문자열을 추출하고 뒤집기
    const reversedPart = my_string.slice(s, e + 1).split('').reverse().join('');
    
    // 원본 문자열의 앞부분, 뒤부분과 뒤집힌 부분을 결합
    const result = my_string.slice(0, s) + reversedPart + my_string.slice(e + 1);
    
    return result;
}

// 예시 테스트
console.log(solution("Progra21Sremm3", 6, 12)); // "ProgrammerS123"
console.log(solution("Stanley1yelnatS", 4, 10)); // "Stanley1yelnatS"
