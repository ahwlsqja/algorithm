function solution(arr, n) {
    if(arr.length % 2 !== 0)
        {
            return arr.map((value, index) => {
            return index % 2 === 0 ? value + n : value;
            });
        }
    else 
        {
            return arr.map((value, index) => {
            return index % 2 !== 0 ? value + n : value;
            })
        }
}