function solution(myString) {
    return myString.split('x') // "x"를 기준으로 문자열을 나눔
        .filter(str => str !== '') // 빈 문자열 제거
        .sort(); // 사전순으로 정렬
}

// 예시 테스트
console.log(solution("axbxcxdx")); // ["a", "b", "c", "d"]
console.log(solution("dxccxbbbxaaaa")); // ["aaaa", "bbb", "cc", "d"]
