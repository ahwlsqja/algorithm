function solution(n, arr1, arr2) {
    let arr1_bin = arr1.map((n) => n.toString(2))
    let arr2_bin = arr2.map((n) => n.toString(2))
    let arr1_1 = [];
    let arr2_2 = [];
    for(let i =0; i < arr1.length; i++){
        arr1_1.push(arr1_bin[i].split(''))
        arr2_2.push(arr2_bin[i].split(''))
    }
    for(let j =0; j < arr1_1.length; j++)
        {
            while(arr1_1[j].length < n)
                {
                    arr1_1[j].unshift(0)
                }
            
            while(arr2_2[j].length < n)
                {
                    arr2_2[j].unshift(0)
                }
        }
    for(let k =0; k < arr2_2.length; k++)
        {
            for(let t=0; t < arr2_2.length; t++)
                {
                    if(arr1_1[k][t] === '1')
                        {
                            arr1_1[k][t] = '#'
                        }
                    else
                        {
                            arr1_1[k][t] = ' '
                        }
                    
                    if(arr2_2[k][t] === '1')
                        {
                            arr2_2[k][t] = '#'
                        }
                    else
                        {
                            arr2_2[k][t] = ' '
                        }
                }
        }
    const array = new Array(n).fill(null).map(() => new Array(n).fill(1));
    for(let j=0; j < arr1_1.length; j++)
        {
            for(let k =0; k < arr1_1.length; k++)
                {
                    if(arr1_1[j][k].includes('#') || arr2_2[j][k].includes('#'))
                        {
                            array[j][k] = '#'
                        }
                    else
                        {
                            array[j][k] = ' '
                        }
                }
        }
    return array.map((n) => n.join(''))
}