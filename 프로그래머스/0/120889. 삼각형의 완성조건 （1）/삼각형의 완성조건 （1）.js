function solution(sides) {
    let sorted_arr = sides.sort((a, b) => a - b)
    if(sorted_arr[0] + sorted_arr[1] > sorted_arr[2]){
        return 1
    }
    else{
        return 2
    }
}