function solution(number, limit, power) {
    let arr = [];
    let result = 0;
    for(let i=1; i < number + 1; i++)
        {
            let count =0;
            for(let j =1; j*j < i + 1; j++)
                {
                    if(i % j === 0)
                        {
                            count += 2
                        }
                    if(i / j === j )
                      {
                        count -= 1
                       }
                }
            arr.push(count);
        }
    for(let k = 0; k < arr.length; k++)
        {
            if(arr[k] > limit)
                {
                    arr[k] = power;
                }
            result = arr[k] + result;
        }
    return result;
}