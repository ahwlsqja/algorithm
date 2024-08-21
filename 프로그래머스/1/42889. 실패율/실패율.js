function solution(N, stages) {
    let result = [];
    let stageCounts = new Array(N + 2).fill(0); // 각 스테이지 도달한 사용자 수
    let failureRates = []; // 각 스테이지의 실패율을 저장할 배열

    // 각 스테이지에 도달한 사용자 수를 계산
    for (let stage of stages) {
        if (stage <= N) {
            stageCounts[stage]++;
        }
    }

    // 총 사용자 수
    let totalUsers = stages.length;

    // 각 스테이지의 실패율 계산
    for (let i = 1; i <= N; i++) {
        if (totalUsers > 0) {
            // 실패율 = 아직 클리어하지 못한 사용자 수 / 도달한 사용자 수
            let failureRate = stageCounts[i] / totalUsers;
            failureRates.push([i, failureRate]); // 스테이지 번호와 실패율을 함께 저장
            totalUsers -= stageCounts[i]; // 다음 스테이지를 위해 도달한 사용자 수 감소
        } else {
            failureRates.push([i, 0]); // 도달한 사용자가 없다면 실패율은 0
        }
    }

    // 실패율 기준으로 정렬 (내림차순), 실패율이 같으면 스테이지 번호 오름차순
    failureRates.sort((a, b) => {
        if (b[1] === a[1]) return a[0] - b[0]; // 실패율이 같으면 스테이지 번호 오름차순
        return b[1] - a[1]; // 실패율 내림차순
    });

    // 결과 배열에 스테이지 번호만 추출
    for (let i = 0; i < failureRates.length; i++) {
        result.push(failureRates[i][0]);
    }

    return result;
}
