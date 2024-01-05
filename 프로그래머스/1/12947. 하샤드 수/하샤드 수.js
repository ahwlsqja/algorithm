function solution(x) {
    let n = x.toString();
    let sum =0;
    for(let i =0; i<n.length; i++)
        {
            sum += Number(n[i]);
        }
    if(x % sum === 0)
        {
            return true;
        }
    else {
        return false;
    }
}