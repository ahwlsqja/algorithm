function solution(arr1, arr2) {
    // 배열의 길이 비교
    if (arr1.length > arr2.length) {
        return 1; // arr1이 더 길면 1 반환
    } else if (arr1.length < arr2.length) {
        return -1; // arr2가 더 길면 -1 반환
    } else {
        // 길이가 같을 때, 각 배열의 합을 비교
        const sum1 = arr1.reduce((acc, val) => acc + val, 0);
        const sum2 = arr2.reduce((acc, val) => acc + val, 0);
        
        if (sum1 > sum2) {
            return 1; // arr1의 합이 더 크면 1 반환
        } else if (sum1 < sum2) {
            return -1; // arr2의 합이 더 크면 -1 반환
        } else {
            return 0; // 두 배열의 합이 같으면 0 반환
        }
    }
}

// 예시 사용
console.log(solution([49, 13], [70, 11, 2])); // -1
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36])); // 1
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3])); // 0
