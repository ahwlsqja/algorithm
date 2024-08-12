function solution(num_list) {
    return num_list.sort((a, b) => a - b).filter((n, index) => index < 5);
}