function solution(brown, yellow) {
    let arr = [];
    let result = [];
    for(let i =1; i <= yellow; i++)
        {
            arr = [];
            if(yellow % i === 0)
                {
                    console.log(22)
                    arr.push(yellow / i)
                    arr.push(i)
                    console.log(arr)
                }
            if((arr[0]+2)*(arr[1]+2) - yellow === brown)
                {
                    console.log(1)
                    result.push(arr[0] + 2)
                    result.push(arr[1] + 2)
  					break
                }
        }
    return result
}