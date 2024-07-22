function solution(numbers) {
    let numMap = {
        "zero": 0, 
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    let result = '';
    let currentWord = '';

    // numbers의 각 문자를 순회
    for (let i = 0; i < numbers.length; i++) {
        currentWord += numbers[i]; // 현재 문자 추가

        // 현재 단어가 numMap에 있는지 확인
        if (numMap[currentWord] !== undefined) {
            result += numMap[currentWord]; // 해당 숫자를 result에 추가
            currentWord = ''; // currentWord 초기화
        }
    }

    return parseInt(result, 10); // 결과를 정수로 변환하여 반환
}

// 예시 테스트
console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
