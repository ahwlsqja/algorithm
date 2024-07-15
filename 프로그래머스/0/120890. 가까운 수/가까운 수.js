function solution(array, n) {
    // 가장 가까운 수를 저장할 변수와 그 수와의 차이를 저장할 변수를 초기화합니다.
    let closest = array[0];
    let minDifference = Math.abs(array[0] - n);
    
    // 배열을 순회하면서 가장 가까운 수를 찾습니다.
    for (let i = 1; i < array.length; i++) {
        let difference = Math.abs(array[i] - n);
        
        if (difference < minDifference || (difference === minDifference && array[i] < closest)) {
            closest = array[i];
            minDifference = difference;
        }
    }
    
    return closest;
}

// 예시 테스트
console.log(solution([3, 10, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12
