def prime_factorization(N):
    # 1인 경우는 아무것도 출력하지 않음
    if N == 1:
        return
    
    # 2로 나누어 떨어지는 경우 처리
    while N % 2 == 0:
        print(2)
        N //= 2

    # 3 이상의 홀수로 나누어 떨어지는 경우 처리
    for i in range(3, int(N**0.5) + 1, 2):
        while N % i == 0:
            print(i)
            N //= i

    # 남은 N이 소수이면 출력
    if N > 2:
        print(N)

# 입력 받기
N = int(input())
prime_factorization(N)
