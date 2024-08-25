function solution(n) {
    let count = 1;
    let start = 1;
    let end = 1;
    let sum = 0;

    while (start <= Math.floor(n / 2)) {
        if (sum < n) {
            sum += end;
            end++;
        } else if (sum > n) {
            sum -= start;
            start++;
        } else {
            count++;
            sum -= start;
            start++;
        }
    }

    return count;
}
