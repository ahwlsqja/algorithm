function solution(strArr) {
    let strCount = {};
    for(const str of strArr)
        {
            const length = str.length
            if(strCount[length])
                {
                    strCount[length]++
                }
            else
                {
                    strCount[length] = 1;
                }       
        }
        
    
    let maxCount = 0;
    for(const count of Object.values(strCount))
        {
            if(count > maxCount)
                {
                    maxCount = count;
                }
        }
    return maxCount;
}