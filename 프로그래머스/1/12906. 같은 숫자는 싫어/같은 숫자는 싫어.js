function solution(arr){
    let startnum = []
    startnum.push(arr[0])
    for(let i =1; i < arr.length; i++)
        {
            if(arr[i] !== arr[i - 1])
                {
                    startnum.push(arr[i])
                }
        }
    return startnum   
}