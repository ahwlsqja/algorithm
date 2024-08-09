function solution(my_string, n) {
    let arr= [];
    let aaa = my_string.split('')
    for(let i=0; i < n; i++)
        {
            arr.push(aaa[i])
        }
    return arr.join('');
}