function solution(park, routes) {
    const maxcol = park[0].length - 1;
    const maxrow = park.length - 1;
    
    // S를 포함하고있는 행을 구한다. 
    let row = park.findIndex((s) => s.includes("S"))
    // S를 포함하고있는 열을 구한다.
    let col = park[row].indexOf("S");
    // S의 좌표를 구함.
    // [row , col]
    
    routes.forEach((x) => {
        const [d, n] = x.split(" ");
        
        let tempRow = row;
        let tempCol = col;
        let flag = true;
        
        for(let i = 0; i < Number(n); i++)
            {
                if(d === "E") tempCol++
                else if(d === 'W') tempCol --;
                else if(d === 'S') tempRow ++;
                else if(d === 'N') tempRow --;
                
                // 공원 벗어났느지 검사
                if(
                tempRow > maxrow || tempRow < 0 || tempCol > maxcol || tempCol < 0 || park[tempRow][tempCol] === "X"
                ) {
                    flag= false;
                    break;
                }
            }
        
        if(flag){
            col = tempCol;
            row = tempRow;
        }
    })
    return [row, col];
}
// 1)
// S O O
// O O O
// O O O

// 2)
// S O O
// O X X
// O O O 

// 3) 
// O S O
// O O O 
// O X O
// O O O 