function solution(n, m, section) {
    let answer = 0;
    let wallArr = new Array(n).fill(true); // [true, true, true, true, true, true, true, true];
    section.forEach((e, i) => {
        wallArr[e-1] = false; // [true, false, false, true, true, false, true, true];
    })
    section.forEach((e, i) => {
        let count = 0;
        // section은 1부터 시작하니까 0부터 시작하는 wallArr와 비교를 위해 index-1
        if(wallArr[e-1] == false) {
            // 해당 인덱스부터 m번 index 1씩 늘려가면서 페인트 칠하기
            for(let i=0; i<m; i++) {
                wallArr[e - 1 + i] = true;
            }
            // 4)
            answer += 1;
        }
    })

    return answer;
}