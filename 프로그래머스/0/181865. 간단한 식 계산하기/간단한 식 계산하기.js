function solution(binomial) {
    let arr = binomial.split(' ');
    if(arr[1]==='+')
        {
			return parseInt(arr[0]) + parseInt(arr[2])
        }
    else if(arr[1] === '-')
        {
            return parseInt(arr[0]) - parseInt(arr[2])
        }
    else 
        {
            return parseInt(arr[0]) * parseInt(arr[2])
        }
}