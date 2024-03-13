

function solution(wallpaper) {
    let answer = [];
    let tempArr = [];

    // 1)
    for(let i=0; i<wallpaper.length; i++) {
        for(let j=0; j<wallpaper[i].length; j++) {
            if(wallpaper[i][j] == '#') {
                tempArr.push([i, j])
            }
        }
    }

    // 2)
    let minX = Math.min(...tempArr.map(item => item[0])); // x값의 최소값 구하기
    let minY = Math.min(...tempArr.map(item => item[1])); // y값의 최소값 구하기
    let maxX = Math.max(...tempArr.map(item => item[0])); // x값의 최대값 구하기
    let maxY = Math.max(...tempArr.map(item => item[1])); // y값의 최대값 구하기

    // 3
    answer.push(minX, minY, maxX+1, maxY+1)

    return answer;
}