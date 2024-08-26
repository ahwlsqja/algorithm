function solution(people, limit) {
    // 사람들을 무게 기준으로 정렬
    people.sort((a, b) => a - b);
    
    let left = 0;
    let right = people.length - 1;
    let count = 0;

    while (left <= right) {
        // 가장 가벼운 사람과 가장 무거운 사람을 함께 태울 수 있는지 확인
        if (people[left] + people[right] <= limit) {
            left++;  // 가벼운 사람 태우기
        }
        right--;  // 무거운 사람은 항상 태움
        count++;  // 보트에 태운 사람 수 증가
    }

    return count;
}
