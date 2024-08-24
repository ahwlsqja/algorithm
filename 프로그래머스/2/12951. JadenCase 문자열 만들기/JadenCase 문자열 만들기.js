function solution(s) {
    let arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) { // 빈 문자열인지 확인
            let arr1 = arr[i].split('');
            arr1[0] = arr1[0].toUpperCase(); // 첫 번째 문자를 대문자로
            for (let j = 1; j < arr1.length; j++) {
                arr1[j] = arr1[j].toLowerCase(); // 나머지 문자는 소문자로
            }
            arr[i] = arr1.join(''); // 다시 문자열로 변환
        }
    }
    return arr.join(' '); // 최종 결과를 공백으로 연결하여 반환
}
