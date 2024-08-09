function solution(num_list) {
    let arr = [];
    let arr_even = [];
    for(let i = 0 ; i< num_list.length; i++)
        {
            if(num_list[i] % 2 === 0)
                {
                    arr.push(num_list[i]);
                }
            else{
                arr_even.push(num_list[i]);
            }
        }
    return parseInt(arr.join('')) + parseInt(arr_even.join(''));
}