def solution(n, arr1, arr2):
    arr = ["" for _ in range(n)]
    for i in range(n):
        k = 0
        a = ""
        b = ""
        while k < n:
            a += str(arr1[i]%2)
            b += str(arr2[i]%2)
            arr1[i] = arr1[i]//2
            arr2[i] = arr2[i]//2
            k += 1
        
        for j in range(n-1, -1, -1):
            if a[j] == "1" or b[j] == "1":
                arr[i] += "#"
            else:
                arr[i] += " "
    return arr