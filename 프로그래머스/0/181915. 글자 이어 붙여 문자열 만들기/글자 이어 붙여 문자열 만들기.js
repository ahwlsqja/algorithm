function solution(my_string, index_list) {
    let arr = [];
    let saved_my_string = my_string.split('')
    
    for(let i =0; i< index_list.length; i++)
        {
            arr.push(saved_my_string[index_list[i]])
        }
    let stringarr = arr.join('')
    return stringarr;
}