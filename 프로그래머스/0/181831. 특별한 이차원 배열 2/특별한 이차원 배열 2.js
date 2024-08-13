function solution(arr) {
    const n = arr.length; // 배열의 크기(n x n)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] !== arr[j][i]) { // 대칭 조건 확인
                return 0; // 대칭이 아닐 경우 0 반환
            }
        }
    }

    return 1; // 모든 조건을 만족할 경우 1 반환
}

// 예시 테스트
console.log(solution([[5, 192, 33], [192, 72, 95], [33, 95, 999]])); // 1
console.log(solution([[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]])); // 0
