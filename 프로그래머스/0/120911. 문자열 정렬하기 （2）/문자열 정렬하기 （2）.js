function solution(my_string) {
    const sortedArray = my_string.toLowerCase().split('').sort();
    const sortedString = sortedArray.join('');
    return sortedString;
}