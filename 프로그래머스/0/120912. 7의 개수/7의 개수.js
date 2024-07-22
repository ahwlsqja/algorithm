function solution(array) {
    let result = 0;
    for(let i =0; i < array.length; i++)
        {
            let arrToString = array[i].toString();
            arrToString = arrToString.split('');
            for(let x =0; x < arrToString.length; x++)
                {
                    if(arrToString[x] === '7')
                        {
                            result += 1;
                        }
                }
        }
    return result;
}