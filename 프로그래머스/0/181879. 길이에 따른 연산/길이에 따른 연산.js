function solution(num_list) {
    if(num_list.length >= 11)
        {
            return num_list.reduce((start, cur) => {return start + cur})
        }
    else 
        {
            return num_list.reduce((start, cur) => {return start*cur})
        }
}