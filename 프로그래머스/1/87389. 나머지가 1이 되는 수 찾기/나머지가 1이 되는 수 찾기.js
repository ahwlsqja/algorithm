function solution(n) {
    let x = 1;
    for (let i = n; i>1; i--)
        {
            if(n % i === 1)
                {
                    x = i;
                }
        }
    return x;
}