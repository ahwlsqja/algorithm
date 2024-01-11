function solution(sizes) {
    let min_arr = [];
    let max_arr = [];
    let w = 0;
    let h = 0;
    let result = 0;
    for(let i = 0 ; i < sizes.length; i++)
        {
            min_arr.push(Math.min(...sizes[i]));
            max_arr.push(Math.max(...sizes[i]));
        }
    w = Math.max(...min_arr);
    h = Math.max(...max_arr);
    result = w*h;
    return result;
}