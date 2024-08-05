function solution(A, B) {
    // A와 B의 길이가 다르면 -1 반환
    if (A.length !== B.length) {
        return -1;
    }
    
    // A가 B와 같은 경우 0 반환
    if (A === B) {
        return 0;
    }
    
    // A를 밀어보면서 B와 일치하는지 확인
    const len = A.length;
    for (let i = 1; i < len; i++) {
        // A를 오른쪽으로 한 칸 밀어서 새로운 문자열 생성
        A = A[len - 1] + A.slice(0, len - 1);
        if (A === B) {
            return i; // 밀었던 횟수 반환
        }
    }
    
    return -1; // B와 일치하지 않으면 -1 반환
}
