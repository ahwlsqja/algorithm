function solution(myString) {
    return myString.split('').map(n => {
        if (n === 'a') {
            return 'A'; // "a"를 "A"로 변환
        } else if (n >= 'B' && n <= 'Z') {
            return n.toLowerCase(); // 대문자는 소문자로 변환
        }
        return n; // 나머지 문자는 그대로 반환
    }).join('');
}

// 테스트
console.log(solution("abstract algebra")); // "AbstrAct AlgebrA"
console.log(solution("PrOgRaMmErS")); // "progrAmmers"
