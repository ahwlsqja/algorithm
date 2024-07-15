function solution(emergency) {
    // emergency 배열의 원소를 내림차순으로 정렬하고, 그 순서를 기억합니다.
    const sortedEmergency = [...emergency].sort((a, b) => b - a);
    
    // 원래 배열의 각 원소가 내림차순으로 정렬된 배열에서 몇 번째인지 찾아서 순서를 매깁니다.
    const result = emergency.map(e => sortedEmergency.indexOf(e) + 1);
    
    return result;
}

// 예시 테스트
console.log(solution([3, 76, 24]));  // [3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7]));  // [7, 6, 5, 4, 3, 2, 1]
console.log(solution([30, 10, 23, 6, 100]));  // [2, 4, 3, 5, 1]
