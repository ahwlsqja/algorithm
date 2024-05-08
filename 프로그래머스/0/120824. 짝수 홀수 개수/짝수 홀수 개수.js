function solution(num_list) {
    var answer = [];
    let count1 = 0;
    let count2 = 0;
    for(let i =0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            count1 +=1;
        }
        else{
            count2 +=1;
        }
    }
    answer.push(count1)
    answer.push(count2)
    return answer
    
}