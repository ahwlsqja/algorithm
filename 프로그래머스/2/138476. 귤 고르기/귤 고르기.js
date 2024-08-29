function solution(k, tangerine) {
    let tangerine_count = {};
    let result = 0;
    // 배열 순회하면서 tangerine[i]이 갯수를 각각 {}에 저장
    for(let i =0; i < tangerine.length; i++)
        {
            if(tangerine_count[tangerine[i]] !== undefined)
                {
                    tangerine_count[tangerine[i]] += 1;
                }
            else{
                tangerine_count[tangerine[i]] = 1;
            }
        }
    
    let sorted_tangerines = Object.entries(tangerine_count).sort((a, b) => b[1] - a[1]) // a, b는 각각 키 : 값 배열이다.
    // 객체를 배열로 변환: Object.entries(tangerine_count)를 사용하여 객체를 [키, 값] 쌍의 배열로 변환합니다.
    console.log(sorted_tangerines)
    let sum = 0;

    for(let i =0; i < sorted_tangerines.length; i++)
          {
                sum += sorted_tangerines[i][1]
              	result += 1;
              	if(sum >= k)
                    {
                        break
                    }
          }
    return result
}