function solution(n) {
    let count = 0;
    for(let j =4; j<=n; j++)
        {
            for(let k =2; k<j; k++)
                {
                    if(j%k===0)
                        {
                            count +=1
        					break
                        }
                }
        }
    return count;
}