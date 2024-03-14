function solution(players, callings) {
    // 선수들의 현재 위치를 저장하는 객체 생성
    let positions = {};
    for (let i = 0; i < players.length; i++) {
        positions[players[i]] = i;
    }

    // 해설진이 부른 이름에 따라 선수들의 위치 업데이트
    callings.forEach(calling => {
        const pos = positions[calling];
        if (pos > 0) { // 첫 번째 위치가 아닐 경우에만 위치 변경
            // 선수와 바로 앞 선수의 위치를 바꾸기
            const prevPlayer = players[pos - 1];
            players[pos - 1] = calling;
            players[pos] = prevPlayer;

            // 위치 정보 업데이트
            positions[calling] = pos - 1;
            positions[prevPlayer] = pos;
        }
    });

    return players;
}
