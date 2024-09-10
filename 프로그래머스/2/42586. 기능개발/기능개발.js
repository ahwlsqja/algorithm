function solution(progresses, speeds) {
    let days = [];
    
    // 각 작업의 완료 일수 계산
    for (let i = 0; i < progresses.length; i++) {
        const remaining = 100 - progresses[i];
        const requiredDays = Math.ceil(remaining / speeds[i]);
        days.push(requiredDays);
    }

    let result = [];
    let count = 1;

    // 첫 번째 작업의 완료 일수
    let currentMax = days[0];

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= currentMax) {
            count++; // 같은 날에 완료되는 작업 수 증가
        } else {
            result.push(count); // 이전 작업 그룹 완료
            count = 1; // 새로운 그룹 시작
            currentMax = days[i]; // 새로운 최대 완료 일수 갱신
        }
    }

    // 마지막 그룹 추가
    result.push(count);

    return result;
}

// 예시 사용
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
