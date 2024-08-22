def solution(numbers, hand):
    answer = ''
    arr = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["*", "0", "#"]]
    
    ll = ["1", "4" ,"7"]
    rr = ["3", "6", "9"]
    l_prev = "*"
    r_prev = "#"
    
    for nn in numbers:
        n = str(nn)
        if n in ll:
            l_prev = n
            answer += "L"
            continue
        if n in rr:
            r_prev = n
            answer += "R"
            continue
        level = 0
        r_level = 0
        l_level = 0
        r_dist = 9
        l_dist = 9
        r_index = 0
        l_index = 0
        for i in range(len(arr)):
            if n in arr[i]:
                level = i
            if r_prev in arr[i]:
                r_level = i
                for j in range(len(arr[i])):
                    if arr[i][j] == r_prev:
                        r_index = j
                
            if l_prev in arr[i]:
                l_level = i
                for j in range(len(arr[i])):
                    if arr[i][j] == l_prev:
                        l_index = j
        r_dist = abs(level - r_level) + (1 if r_index != 1 else 0)
        l_dist = abs(level - l_level) + (1 if l_index != 1 else 0)
        print(r_dist, l_dist)
        if r_dist > l_dist:
            l_prev = n
            answer += "L"
        elif r_dist < l_dist:
            r_prev = n
            answer += "R"
        else:
            if hand == "left":
                l_prev = n
                answer += "L"
            else:
                r_prev = n
                answer += "R"
    return answer