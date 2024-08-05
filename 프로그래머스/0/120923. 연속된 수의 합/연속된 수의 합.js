function solution(num, total) {
    const a = (total -(num-1)*num/2)/num;
    const result = [];
    for(let i=0; i < num; i++)
        {
            result.push(a + i);
        }
    
    return result;
}