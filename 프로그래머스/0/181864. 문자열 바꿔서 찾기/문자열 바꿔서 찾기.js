function solution(myString, pat) {
    // 문자열의 각 문자를 'A'는 'B'로, 'B'는 'A'로 변환
    return myString.split('').map(n => (n === 'A' ? 'B' : (n === 'B' ? 'A' : n))).join('').includes(pat) ? 1 : 0
}
