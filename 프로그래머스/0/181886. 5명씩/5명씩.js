function solution(names) {
    const answer = []; // 결과를 저장할 배열 생성

    for (let i = 0; i < names.length; i += 5) {
        answer.push(names[i]); // 현재 그룹의 첫 번째 사람의 이름 추가
    }

    return answer; // 최종 결과 배열 반환
}

// 테스트
console.log(solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])); // ["nami", "vex"]
