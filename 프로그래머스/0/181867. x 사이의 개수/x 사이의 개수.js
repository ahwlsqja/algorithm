function solution(myString) {
    return myString.split('x').map(n => n.length);
}

// 예시 사용
console.log(solution("oxooxoxxox")); // [1, 2, 1, 0, 1, 0]
console.log(solution("xabcxdefxghi")); // [0, 3, 3, 3]
