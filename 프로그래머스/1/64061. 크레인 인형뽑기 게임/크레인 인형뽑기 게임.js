function solution(board, moves) {
    let result = 0;
    let basket = [];

    for (let i = 0; i < moves.length; i++) {
        let column = moves[i] - 1;
        for (let j = 0; j < board.length; j++) {
            if (board[j][column] !== 0) {
                let doll = board[j][column];
                board[j][column] = 0; // 인형 제거
                if (basket.length > 0 && basket[basket.length - 1] === doll) {
                    basket.pop();
                    result += 2; // 터트려진 인형 개수 증가
                } else {
                    basket.push(doll);
                }
                break; // 다음 크레인 작동으로 이동
            }
        }
    }

    return result;
}
