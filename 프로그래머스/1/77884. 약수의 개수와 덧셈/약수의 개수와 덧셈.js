function solution(left, right) {
    let sum = 0;
    for(let i = left; i <=right; i++)
        {
            let count = 0;
            for(let j =1; j <= i; j++)
                {
                    if(i % j === 0)
                        {
                            count += 1;
                        }
                }
            if((count % 2) === 0)
               {
                    sum += i;
               }
            else if((count % 2) === 1)
                {
                    sum -= i
                }
        }
    
    return sum;
}