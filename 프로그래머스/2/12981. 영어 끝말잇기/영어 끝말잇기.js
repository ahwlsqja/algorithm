function solution(n, words) {
    var answer = [];
    let xx = {};

    for (let i = 0; i < words.length; i++) {
        if(words[i].length === 1)
            {
                const player = (i + 1) % n === 0 ? n : (i + 1) % n;
                const turn = Math.ceil((i + 1) / n); // 턴 계산
                return [player, turn];
            }
        if (xx[words[i]] !== undefined) {
            xx[words[i]] += 1;
            if (xx[words[i]] === 2) {
                const player = (i + 1) % n === 0 ? n : (i + 1) % n;
                const turn = Math.ceil((i + 1) / n); // 턴 계산
                return [player, turn];
            }
        } else {
            xx[words[i]] = 1; // 처음 등장하는 단어
        }

        if (i > 0 && words[i - 1].slice(-1) !== words[i][0]) {
            const player = (i + 1) % n === 0 ? n : (i + 1) % n;
            const turn = ((i + 1) / n )< 1 ? 1 : Math.ceil((i + 1) / n); // 턴 계산
            console.log(Math.round((4) / 3))
            console.log(turn)
            return [player, turn];
        }
    }

    return [0, 0]; // 모든 단어가 규칙에 맞음
}
