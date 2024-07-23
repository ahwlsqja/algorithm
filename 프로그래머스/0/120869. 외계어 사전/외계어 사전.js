function solution(spell, dic) {
    // spell 배열의 알파벳을 정렬하여 키를 생성합니다.
    const sortedSpell = spell.sort().join('');
    
    // dic의 각 단어를 확인하여 정렬된 형태와 매칭합니다.
    for (let word of dic) {
        if (word.split('').sort().join('') === sortedSpell) {
            return 1; // 일치하는 단어가 존재할 경우 1 반환
        }
    }
    
    return 2; // 일치하는 단어가 없을 경우 2 반환
}

// 테스트 케이스
console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
console.log(solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])); // 2
