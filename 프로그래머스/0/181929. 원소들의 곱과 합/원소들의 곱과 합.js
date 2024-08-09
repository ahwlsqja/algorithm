function solution(num_list) {
    let sum = num_list.reduce((a, b) => a + b);
    let xx = num_list.reduce((a, b) => a * b);
    if(sum*sum > xx)
        {
            return 1;
        }
    else
        {
            return 0;
        }
}