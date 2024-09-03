function solution(clothes) {
    let clothesMap = {};

    // 의상 종류별로 의상 수 카운트
    for (let i = 0; i < clothes.length; i++) {
        const type = clothes[i][1];
        if (clothesMap[type]) {
            clothesMap[type] += 1;
        } else {
            clothesMap[type] = 1;
        }
    }

    // 조합 계산
    let combinations = 1;
    for (let key in clothesMap) {
        combinations *= (clothesMap[key] + 1); // 각 의상 종류에서 0개 또는 1개를 선택할 수 있음
    }

    // 최소 한 개의 의상은 입어야 하므로 1을 빼줌
    return combinations - 1;
}
