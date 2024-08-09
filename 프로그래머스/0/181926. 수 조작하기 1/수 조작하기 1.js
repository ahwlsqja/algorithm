function solution(n, control) {
    let sum = n;
    for(let i=0; i < control.length; i++)
        {
            if(control[i] === 'w')
                {
                    sum += 1
                }
            else if(control[i] === 's')
                {
                    sum -= 1;
                }
            else if(control[i] === "d")
                {
                    sum += 10;
                }
            else if(control[i] === "a")
                {
                    sum -= 10;
                }
        }
    return sum;
}