function solution(polynomial) {
    const splited = polynomial.split(" + ");
    // 일차항들 
    let xArr = splited.filter((v) => v.includes("x")).
    map((v) => v.split("x")[0] ? v.split("x")[0] : 1);
    
    // 상수항들 
    let constArr = splited.filter((v) => !v.includes("x"));
    
    if(xArr.length && constArr.length)
        {
            xArr = xArr.reduce((a, b)=> +a + +b)
            constArr = constArr.reduce((a, b) => +a + +b)
            return xArr == 1 ? `x + ${constArr}` : `${xArr}x + ${constArr}`
        }
    else if
        (xArr.length)
    {
     xArr = xArr.reduce((a, b) => +a + +b)
     return xArr == 1 ? "x" : `${xArr}x`
    }
    else if(constArr.length)
        {
            constArr = constArr.reduce((a, b) => +a + +b)
            return constArr + ""
        }
}