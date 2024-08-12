function solution(myString) {
    return myString.split('').map(n => {
       return n < 'l' ? 'l' : n
    }).join('')
}