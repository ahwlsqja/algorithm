function solution(arr, idx) {
    for (let i = idx; i < arr.length; i++) {
        if (arr[i] === 1) {
            return i; // 조건을 만족하는 인덱스를 바로 반환
        }
    }
    return -1; // 조건을 만족하는 인덱스가 없을 경우 -1 반환
}

// 예시 테스트
console.log(solution([0, 0, 0, 1], 1)); // 3
console.log(solution([1, 0, 0, 1, 0, 0], 4)); // -1
console.log(solution([1, 1, 1, 1, 0], 3)); // 3
