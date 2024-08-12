function solution(my_string) {
    return my_string.split(' ').
    map(n => n.trim()).filter((n, index) => n !== "");
}