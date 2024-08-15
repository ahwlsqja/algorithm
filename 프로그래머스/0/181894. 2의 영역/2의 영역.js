function solution(arr) {
    let result = [];
    let indexes = arr
        .map((value, index) => (value === 2 ? index : -1)) // 값이 2인 경우 인덱스 반환, 아니면 -1 반환
        .filter(index => index !== -1); // -1이 아닌 인덱스만 필터링
    if(indexes.length === 0)
        {
            result.push(-1)
        }
    else
        {
            for(let i = indexes[0]; i < indexes[indexes.length- 1]; i++)
                {
                    result.push(arr[i])  
                }   
                result.push(2)
        }  
    return result
}