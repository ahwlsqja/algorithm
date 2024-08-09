function solution(n) {
    let sum = 0;
    let sum1 = 0;
    if(n % 2 === 0)
        {
            for(let j =2; j<=n; j+=2)
                {
                    sum += j*j
                }
            return sum
        }
    else
    {
    	for(let i =1; i<=n; i+=2)
            {
                sum1 += i; 
            }
        return sum1
    }
}