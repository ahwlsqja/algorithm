function solution(n) {
    var answer = [];
    let n_str = n.toString();
    for (let i = 0; i<n_str.length; i++)
        {
            answer.push(parseInt(n_str[n_str.length -i-1]));
        }
    return answer;
}