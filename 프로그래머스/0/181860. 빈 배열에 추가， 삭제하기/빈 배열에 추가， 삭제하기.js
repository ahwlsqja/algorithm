function solution(arr, flag) {
    let result = [];
    for(let i =0; i < flag.length; i++)
        {
            if(flag[i])
                {
                    for(let j =0; j<arr[i] * 2; j++)
                        {
                            result.push(arr[i])
                        }
                }
            else 
                {
                    for(let k =0; k < arr[i]; k++)
                        {
                            result.pop()
                        }
                }
        }
    return result;
}