function solution(n) {
    var n_1 = 0;
    let arr = [];
    let answer = 0;
    n_1 = parseInt(n,10).toString(3);
    arr = n_1.split("").reverse().join("");
    answer = parseInt(arr,3).toString(10);
    return parseInt(answer);
}