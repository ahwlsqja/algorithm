function solution(num_list) {
    let arr = []
    if(num_list[num_list.length - 1] > num_list[num_list.length -2])
        {
            num_list.push(num_list[num_list.length -1] - num_list[num_list.length -2])
            
        }
    else{
        num_list.push(num_list[num_list.length -1] * 2)
    }
    
    return num_list
}