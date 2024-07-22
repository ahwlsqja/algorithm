function solution(i, j, k) {
    let arr = 0;
    let result = 0;
    for(let t=i; t<=j; t++)
        {
            arr = t.toString()
            arr = arr.split('');
            for(let x=0; x<arr.length; x++)
                {
                    if(Number(arr[x]) === k)
                        {
                            result += 1;
                        }
                }
        }
    return result;
}