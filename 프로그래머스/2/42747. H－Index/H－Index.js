function solution(citations) {
    let sorted_citations = citations.sort((a,b) => b - a);
    for(let k =0; k < sorted_citations.length; k++)
        {
            if(k+1 > sorted_citations[k])
                {
                    return k
                }
        }
    
    return sorted_citations.length
}