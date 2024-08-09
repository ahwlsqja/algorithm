function solution(my_string) {
    let leg = my_string.length;
    let myarr = my_string.split('')
    let result = [];
    for(let i=0; i < leg; i++)
        {
            let arr = [];
    		for(let j = leg; j>=i; j--)
        		{
            		arr.push(myarr[j])
        		}
            result.push(arr.reverse().join(""))
        }
    return result.sort();
}