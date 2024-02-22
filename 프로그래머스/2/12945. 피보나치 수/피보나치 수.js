function solution(n) {
    let arr = [0, 1];
    for(let i = 2; i< n + 1; i++){
        arr[i] = (arr[i - 1] + arr[i -2]) % 1234567;
    }
    return arr[n]
}