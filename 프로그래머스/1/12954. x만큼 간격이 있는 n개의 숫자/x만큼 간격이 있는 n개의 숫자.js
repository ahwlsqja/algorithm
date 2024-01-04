function solution(x, n) {
    var answer = [];
    
    let addictive_diff = x;
    
    for(let i= 0; i < n; i++){
        answer.push(x);
        x += addictive_diff;
    }
    return answer;
}