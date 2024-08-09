function solution(str_list, ex) {
    let arr = str_list.filter((el) => !el.includes(ex))
    return arr.join('');
}