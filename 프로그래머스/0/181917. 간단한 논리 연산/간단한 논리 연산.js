function solution(x1, x2, x3, x4) {
    if(x1 || x2)
        {
            if(!x3 && !x4)
                {
                    return false
                }
            else
                {
                    return true
                }
        }
    if(x3 || x4)
        {
            if(!x1 && !x2)
                {
                    return false
                }
            else 
                {
                    return true
                }
        }
    if(!x1 && !x2 && !x3 && !x4)
        {
            return false
        }
    
}