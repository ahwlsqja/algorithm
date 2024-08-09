function solution(my_strings, parts) {
    let aaa = [];
    let aa = [];
    let abc = [];
    for(let i= 0; i < my_strings.length; i++)
        {
            aa = my_strings[i].split('')
            for(let j = parts[i][0]; j <= parts[i][1]; j++)
                {
                    abc.push(aa[j])
                }
        }
    return abc.join('');
}