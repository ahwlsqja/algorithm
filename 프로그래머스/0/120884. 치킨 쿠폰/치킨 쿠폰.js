function solution(chicken) {
    let saves = 0;
    let result = Math.floor(chicken / 10); // 쿠폰으로 얻은 치킨
    saves += result; // 결과값에 더함

    // 추가적인 치킨을 계산하기 위한 루프
    while (result >= 1) {
        chicken = result + (chicken % 10); // 남은 치킨과 새로 얻은 치킨을 합칩니다.
        result = Math.floor(chicken / 10); // 다시 몇 마리를 얻을 수 있는지 계산합니다.
        saves += result; // 새로 얻은 치킨을 saves에 추가합니다.
    }

    return saves;
}
