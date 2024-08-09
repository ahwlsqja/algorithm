function solution(a, b) {
    let string1 = parseInt(String(a) + String(b));
    let string2 = parseInt(String(b) + String(a));
    return string1 >= string2 ? string1 : string2;
}