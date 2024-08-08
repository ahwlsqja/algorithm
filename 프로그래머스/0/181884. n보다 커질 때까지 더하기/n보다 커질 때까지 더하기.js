function solution(numbers, n) {
    let d = 0;
    for(let i =0; i < numbers.length; i++)
        {
            if(d > n)
                {
                    break
                }
            d += numbers[i]
        }
    return d;
}