function solution(elements) {
    let sum = new Set(); // 중복을 피하기 위해 Set 사용
    const n = elements.length;

    // 모든 부분수열의 합을 계산
    for (let t = 1; t <= n; t++) { // 부분수열의 길이
        for (let j = 0; j < n; j++) { // 시작 인덱스
            let point = 0; // 각 부분수열의 합 초기화
            for (let k = 0; k < t; k++) {
                point += elements[(j + k) % n]; // 순환적으로 인덱스 처리
            }
            sum.add(point); // Set에 추가하여 중복 제거
        }
    }

    return Array.from(sum).length; // Set을 배열로 변환하여 반환
}

// 예시 사용
const elements = [1, 2, 3, 4];
const result = solution(elements);
console.log(result); // 부분수열의 합 출력
