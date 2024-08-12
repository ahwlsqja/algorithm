function solution(n) {
    // n x n 크기의 2차원 배열 생성
    let arr = new Array(n); // n개의 행을 가진 배열 생성
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n).fill(0);
        arr[i][i] = 1// 각 행을 n개의 0으로 채운 배열로 초기화
    }
    return arr;
}
