# 두 자연수 A와 B를 입력받습니다.
A, B = map(int, input().split())

# 각 연산 결과를 계산합니다.
result1 = A + B
result2 = A - B
result3 = A * B
result4 = A // B  # 몫
result5 = A % B   # 나머지

# 결과를 출력합니다.
print(result1)  # A + B
print(result2)  # A - B
print(result3)  # A * B
print(result4)  # A // B (몫)
print(result5)  # A % B (나머지)
