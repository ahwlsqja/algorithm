function solution(rny_string) {
    let arr = rny_string.split("")
    for(let i=0; i< rny_string.length; i++)
        {
            if(rny_string[i] === "m")
                {
                    arr[i]= "rn"
                }
        }
    return arr.join('');
}