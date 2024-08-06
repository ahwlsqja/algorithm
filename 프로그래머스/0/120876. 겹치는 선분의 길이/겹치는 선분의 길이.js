function solution(lines) {
    let answer = 0;
    const sortedLines = lines.sort((a, b) => a[0] - b[0]);
    let result = [];
    for(let i = 0; i < 3; i++)
        {
            for(let j =i+1; j < 3; j++)
                {
                    if(sortedLines[i][1] > sortedLines[j][0])
                        {
                            if(sortedLines[i][1] > sortedLines[j][1])
                                {
                                    result.push([sortedLines[j][0], sortedLines[j][1]]);
                                } else {
                                    result.push([sortedLines[j][0], sortedLines[i][1]]);
                                }
                        }
                }
        }
    if(result.length === 0)
        {
            answer = 0;
        }
    else if (result.length === 1)
        {
        answer = result[0][1] - result[0][0]
        }
    else if (result.length === 2)
        {
            result.forEach((el) => {
                answer += el[1] - el[0];
            })
        }
    else if(result.length === 3)
        {
            const sortedResult = result.sort((a, b) => a[0] - b[0]);
            let start = [];
            let end = [];
            sortedResult.forEach((el) => {
                start.push(el[0]);
                end.push(el[1]);
            })
            answer = Math.max(...end) - Math.min(...start);
        }
    return answer;
}