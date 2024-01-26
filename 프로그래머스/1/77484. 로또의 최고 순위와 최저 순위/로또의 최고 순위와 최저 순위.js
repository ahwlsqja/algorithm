function solution(lottos, win_nums) {
    let answer = 0
    let arr = [];
    let free_num = 0;
    let returns = 0;
    for(let i =0 ;i<lottos.length; i++)
        {
            for(let j=0; j<lottos.length; j++)
                {
                    if(lottos[i] === win_nums[j])
                        {
                            answer += 1;
                        }
                }
            if(lottos[i] === 0)
                {
                    free_num += 1;
                }
        }
    
    if(7-answer-free_num >= 6)
        {
            arr.push(6)
        }
    else{
        arr.push(7-answer-free_num);
    }
    if(7 -answer >= 6)
        {
            arr.push(6)
        }
    else
        {
            arr.push(7-answer);
        }
    return arr;
}