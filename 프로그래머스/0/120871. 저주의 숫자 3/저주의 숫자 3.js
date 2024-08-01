function solution(n) {
    let abc = 0; // 3x 마을 숫자 카운팅을 위한 변수
    let count = 0; // 유효한 숫자의 개수를 세기 위한 변수

    while (count < n) {
        abc += 1; // abc를 증가시킴
        // abc가 3의 배수가 아니고, '3'이 포함되지 않으면 count 증가
        if (abc % 3 !== 0 && !String(abc).includes('3')) {
            count += 1; // 유효한 숫자 카운트 증가
        }
    }

    return abc; // n번째 유효한 숫자 반환
}
