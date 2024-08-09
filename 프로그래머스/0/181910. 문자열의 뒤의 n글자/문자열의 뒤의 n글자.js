function solution(my_string, n) {
    let arr = [];
    let aaa= my_string.split('')
    for(let i = my_string.length; i > my_string.length- n-1; i--)
        {
            arr.push(aaa[i])
        }
    
    return arr.reverse().join('');
}