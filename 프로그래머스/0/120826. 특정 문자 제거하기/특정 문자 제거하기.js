function solution(my_string, letter) {
    let result=''
    for(let h =0; h< my_string.length; h++)
        {
            if(!letter.includes(my_string[h])){
                result += my_string[h]
            }
        }
    
    return result
}