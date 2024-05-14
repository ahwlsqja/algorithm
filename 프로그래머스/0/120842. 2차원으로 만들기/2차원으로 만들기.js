function solution(num_list, n) {
    const result = [];
    for (let i = 0; i < num_list.length; i += n) {
        // i번째 인덱스부터 n개의 원소를 새로운 배열로 추출하여 결과 배열에 추가
        result.push(num_list.slice(i, i + n));
    }
    return result;
}
