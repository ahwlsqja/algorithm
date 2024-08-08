function solution(my_string, alp) {
    let arr = my_string.split('');
    for(let i =0 ;i < arr.length; i++)
        {
            if(arr[i] === alp)
                {
                    arr[i] = alp.toUpperCase();
                }
        }
    let result = arr.join('');
    return result;
}