function solution(n, m) {
    let answer = [];
    let min = 0;
    let max = 0;
    for(let i =1; i<1000001; i++)
        {
            if(i %n === 0 && i % m === 0)
                {
                    min = i;
                    break;
                }
        }
    for(let j = 1; j < Math.min(n,m) +1; j++)
        {
            if(n%j === 0 && m %j ===0)
                {
                    max = j;
                }
        }
    answer.push(max);
    answer.push(min);
    return answer;
}