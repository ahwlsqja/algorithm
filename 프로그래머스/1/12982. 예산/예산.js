function solution(d, budget) {
    let count = 0;
    let total = 0;

    // 배열을 오름차순으로 정렬
    d.sort((a, b) => a - b);

    for (let i = 0; i < d.length; i++) {
        // 현재 부서를 예산에 추가했을 때
        if (total + d[i] <= budget) {
            total += d[i]; // 예산에 추가
            count++; // 지원할 수 있는 부서 수 증가
        } else {
            break; // 예산을 초과하면 종료
        }
    }

    return count; // 지원할 수 있는 부서의 개수 반환
}
