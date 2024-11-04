N = int(input())
answer = 0
for 택 in range(0,N+1):
    for 영 in range(0, N+1):
        for 남 in range(0, N+1):
            if 택 + 영 + 남 == N:
                if 택 !=0 and 영 !=0 and 남 != 0:
                    if 남 >= 영 + 2:
                        if 택 % 2 == 0:
                            answer+=1
print(answer)