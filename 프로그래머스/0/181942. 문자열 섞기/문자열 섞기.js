function solution(str1, str2) {
    let answer = [];
    let str1_arr = str1.split('')
    let str2_arr = str2.split('')
    for(let i =0; i < 2 * (str1.length); i++)
        {
            if(i % 2 === 0)
                {
                    answer.push(str1_arr[i/2])
                }
            else if(i % 2 !== 0)
                {
                    answer.push(str2_arr[Math.floor((i/2 +1)-1)])
                    console.log((i/2 +1) -1)
                }
        }
    return answer.join('');
}