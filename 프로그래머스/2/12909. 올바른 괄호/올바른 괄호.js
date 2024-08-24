function solution(s){
    let arr = s.split('')
    let count = 0;
    if(arr[0] === ')')
        {
            return false
        }
    else
        {
            count = 1;
            for(let i=1; i < arr.length; i++)
                {
                    if(arr[i] === '(')
                        {
                            count += 1         
                        }
                    else
                        {
                            count -= 1;
                            if(count < 0)
                                {
                                    return false
                                }
                        }
        }
            if(count !== 0)
                {
                    return false
                }
            
            else
                {
                    return true
                }
        }
}