function solution(s) {
    let arr = s.split(' ');
    let result = 0;
    for(let x =0; x < arr.length; x++)
        {
            if(arr[x] === 'Z')
                {
                    result -= Number(arr[x-1])
                }
            else{
            result += Number(arr[x]);
            }
        }
    return result;
}