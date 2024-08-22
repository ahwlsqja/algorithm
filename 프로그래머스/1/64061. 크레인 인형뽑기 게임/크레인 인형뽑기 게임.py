def solution(board, moves):
    answer = 0
    N = len(board)
    out = []
    count = 0
    for move in moves:
        for i in range(N):
            if board[i][move-1] != 0:
                count += 1
                out.append(board[i][move-1])
                board[i][move-1] = 0
                break
    flag = True
    while flag:
        flag = False
        for i in range(len(out)-1):
            if out[i] == out[i+1]:
                answer += 2
                out.pop(i)
                out.pop(i)
                flag = True
                break
    return answer