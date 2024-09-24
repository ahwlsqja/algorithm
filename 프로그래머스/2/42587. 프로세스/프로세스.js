function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({ priority, index }));
    let answer = 0;

    while (queue.length > 0) {
        const current = queue.shift(); // 큐에서 프로세스 하나 꺼내기
        // 현재 프로세스보다 우선순위가 높은 프로세스가 있는지 확인
        if (queue.some(item => item.priority > current.priority)) {
            queue.push(current); // 우선순위가 높은 프로세스가 있으면 다시 큐에 넣기
        } else {
            answer++; // 실행할 프로세스이므로 실행 카운트 증가
            if (current.index === location) {
                return answer; // 요청한 프로세스가 실행된 경우
            }
        }
    }
    return answer; // 이 부분은 실제로 실행되지 않지만 안전을 위해 추가
}
