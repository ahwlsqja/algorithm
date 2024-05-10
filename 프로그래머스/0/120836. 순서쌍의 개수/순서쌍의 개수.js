function solution(n) {
    if(n == 1)
        {
            return 1
        }
    else{
    let count = 2;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0)
            {
                if(i===Math.sqrt(n))
                    {
                        count -=1
                    }
                count += 2;
            }
    }
    return count;
    }
}