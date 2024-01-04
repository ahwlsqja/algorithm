function solution(n) {
    var answer = 0;
    if(Math.sqrt([n]) % 1 ===0)
        {
            answer = Math.sqrt([n]);
            answer += 1;
            answer *= answer;
            return answer;
        }
    else{
    return -1;
        
    }
}