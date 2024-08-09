function solution(my_string, is_suffix) {
    var answer = 0;
    return answer;
}function solution(my_string, is_suffix) {
    // my_string의 접미사인지 확인
    if (my_string.endsWith(is_suffix)) {
        return 1; // 접미사일 경우 1 반환
    } else {
        return 0; // 접미사가 아닐 경우 0 반환
    }
}

// 입출력 예시 테스트
console.log(solution("banana", "ana"));      // 1
console.log(solution("banana", "nan"));      // 0
console.log(solution("banana", "abcd"));     // 0
console.log(solution("banana", "banana"));   // 1
