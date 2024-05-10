function solution(numbers) {
    let a = numbers.sort((a, b) => a - b)
    return a[a.length -1]*a[a.length-2];
}