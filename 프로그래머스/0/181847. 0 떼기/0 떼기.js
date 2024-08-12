function solution(n_str) {
    let arr_str = n_str.split('');
    if(n_str[0] !== "0")
        {
            return n_str;
        }
    else
        {
            for(let i =0; i < n_str.length; i++)
                {
                    if(n_str[i] === "0")
                        {
                            arr_str.shift();
                        }
                    else
                        {
                            break;
                        }
                }
            return arr_str.join('')
        }
    return answer;
}