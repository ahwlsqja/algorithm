function solution(s) {
    let arr = s.split(' ').sort((a, b) => a - b)
    let arr1 = [];
    arr1.push(arr[0])
    arr1.push(arr[arr.length -1])
    
    
    return arr1.join(' ')
}