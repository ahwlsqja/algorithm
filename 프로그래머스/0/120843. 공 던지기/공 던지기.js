function solution(numbers, k) {
    let currentIndex = 0; // 시작 인덱스 (0번째 친구)
    
    // k번 던질 때까지 반복
    for (let i = 0; i < k - 1; i++) {
        currentIndex = (currentIndex + 2) % numbers.length; // 한 명 건너뛰기
    }
    
    // k번째 던진 친구의 번호 반환
    return numbers[currentIndex];
}


