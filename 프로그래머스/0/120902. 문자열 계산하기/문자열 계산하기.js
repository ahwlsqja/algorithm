function solution(my_string) {
    let my_arr = my_string.split(" ");
    let result = Number(my_arr[0]);
    for(let i = 1; i < my_arr.length; i+=2)
        {
            if(my_arr[i] === '+')
                {
                    result += Number(my_arr[i + 1]);
                }
            else if(my_arr[i] === '-')
                {
                    result -= Number(my_arr[i + 1]);
                }
        }
    return result
    
}