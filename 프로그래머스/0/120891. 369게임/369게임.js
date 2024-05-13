function solution(order) {
    let ee = order.toString()
    const arr1 = ee.split('');
    let result =0;
    for(let j=0; j<arr1.length; j++)
        {
            if(arr1[j]==='3' || arr1[j]==='6' || arr1[j] === '9')
                {
                    result +=1
                }
        }
    return result;
}