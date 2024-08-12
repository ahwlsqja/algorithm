function solution(arr, intervals) {
  	let result =  [];
    for(let i = 0; i < 2; i++)
        {
            for(let j = intervals[i][0]; j < intervals[i][1] + 1; j++)
                {
                    result.push(arr[j])
                }
        }
    return result;
}