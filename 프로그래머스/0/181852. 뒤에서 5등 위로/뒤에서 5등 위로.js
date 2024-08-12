function solution(num_list) {
    let sorted_numlist = num_list.sort((a, b) => a - b);
    return sorted_numlist.filter((n, index) => index > 4); // 인덱스가 4보다 큰 요소들만 반환
}
