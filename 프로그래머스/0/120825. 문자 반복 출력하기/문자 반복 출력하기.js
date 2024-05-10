function solution(my_string, n) {
    let arr = my_string.split('');
    let answer = ''
    for(let t =0; t < my_string.length; t++){
    for(let i =0; i < n; i++)
        {
            answer += my_string[t]
        }
    }
    return answer;
}