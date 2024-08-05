function solution(common) {
    let abc = 0;
    let arrplus = [];
    let arrx = []
    for(let i = 1; i < common.length; i++)
        {
            abc = common[i] - common[i - 1]
            arrplus.push(abc);
        }
    for(let i = 1; i < common.length; i++)
        {
            abc = common[i]/common[i - 1];
            arrx.push(abc);
        }
    if(arrplus[0] === arrplus[1])
        {
            return common[common.length - 1] + arrplus[0]
        }
    else
        {
            return common[common.length - 1] * arrx[0]
        }
}