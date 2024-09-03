function solution(n, left, right) {
    let array = []
    for(let i =left; i<right+1; i++)
        {
            array.push(Math.max(Math.floor(i / n), i % n) +1)
        }
    return array;
}