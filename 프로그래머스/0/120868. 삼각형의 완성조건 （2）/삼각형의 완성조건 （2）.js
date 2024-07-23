function solution(sides) {
    // 새로운 변이 가장 커야하는 경우
    let aa = Math.max(...sides)
    let count = 0;
    for(let i=aa+1; i<sides[0]+sides[1]; i++)
        {
            count+=1;
        }
    // 가장 큰 변보다 작은 경우
    for(let j=1; j<Math.max(...sides)+1; j++)
        {
			if(j+Math.min(...sides)>aa)
                {
                    count+=1;
                }
        }
    return count;
}

// 새로운 변이 가장 커야하는 경우
