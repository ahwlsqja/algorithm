function solution(s) {
    let arr = s.split('')
    let len =0;
    let count = 0;
    let lencount = 0;
    let arr1 = [];
    while(arr.length !== 1)
        {
            len = arr.length
            for(let i =0; i < arr.length; i++)
                {
                    if(arr[i] === '0')
                        {
                            len -= 1 
                            lencount += 1
                        }
                }       
            let result = Number(len)
            arr = result.toString(2).split('')
            count += 1;
        }
    arr1.push(count)
    arr1.push(lencount)
    
    return arr1
}