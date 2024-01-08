function solution(n) {
    let s= ""
    if(n%2 ===1)
        {
            for(let i =0; i<(n-1)/2; i++)
                {
                     s+= "수박"
        }
            s+= "수"
    return s;
        }
    else
        {
            for(let i =0; i<n/2; i++)
                {
                    s+="수박"
                }
            return s;
        }
    return answer;
}