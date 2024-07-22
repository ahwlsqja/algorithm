function solution(my_str, n) {
    let arr = [];
    let arrtrans = my_str.split('')
    for(let i=0; i< my_str.length; i+= n)
        {
            let savearr = [];
            for(let k = i; k < i+n; k++)
                {
                    savearr.push(arrtrans[k])
                }
            arr.push(savearr.join(''));
        }
    return arr;
}