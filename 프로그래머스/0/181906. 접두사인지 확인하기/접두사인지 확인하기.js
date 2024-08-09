function solution(my_string, is_prefix) {
    // my_string의 접두사인지 확인
    if (my_string.startsWith(is_prefix)) {
        return 1; // 접두사일 경우 1 반환
    } else {
        return 0; // 접두사가 아닐 경우 0 반환
    }
}

// 입출력 예시 테스트
console.log(solution("banana", "ban"));      // 1
console.log(solution("banana", "nan"));      // 0
console.log(solution("banana", "abcd"));     // 0
console.log(solution("banana", "bananan"));  // 0
