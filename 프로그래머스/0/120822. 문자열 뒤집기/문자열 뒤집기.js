function solution(my_string) {
    let a = ''
    for(let j=my_string.length-1; j>=0; j--)
        {
           a += my_string[j]
        }
    return a;
}