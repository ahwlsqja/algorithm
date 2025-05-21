def solution(code):
    answer = ''
    mode = 0
    ret = ''
    
    for idx in range(0, len(code), 1):
        print(code[idx])
        if code[idx] != '1':
            if idx % 2 == 0 and mode == 0:
                ret += code[idx]
            if idx % 2 != 0 and mode == 1:
                ret += code[idx]
        else :
            if mode == 0:
                mode = 1;
            else :
                mode = 0;
        
    if ret == '' :
        return "EMPTY"
    
    return ret
