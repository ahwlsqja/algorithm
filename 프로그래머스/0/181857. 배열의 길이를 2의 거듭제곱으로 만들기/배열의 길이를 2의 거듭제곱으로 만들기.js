function solution(arr) {
    if(arr.length === 0)
        {
            while(arr.length !== 1)
                {
                    arr.push(0)
                }
        }
    else if(1 < arr.length && arr.length <= 2)
        {
            while(arr.length !== 2)
                {
                    arr.push(0)
                }
        }
    else if(2 < arr.length && arr.length <= 4)
        {
            while(arr.length !== 4)
                {
                    arr.push(0)
                }
        }
    else if(4 < arr.length && arr.length <= 8)
        {
            while(arr.length !== 8)
                {
                    arr.push(0)
                }
        }
    else if(8 < arr.length && arr.length <= 16)
        {
            while(arr.length !== 16)
                {
                    arr.push(0)
                }
        }
    else if(16 < arr.length && arr.length <= 32)
        {
            while(arr.length !== 32)
                {
                    arr.push(0)
                }
        }
    else if(32 < arr.length && arr.length <= 64)
        {
            while(arr.length !== 64)
                {
                    arr.push(0)
                }
        }
    else if(64 < arr.length && arr.length <= 128)
        {
            while(arr.length !== 128)
                {
                    arr.push(0)
                }
        }
    else if(128 < arr.length && arr.length <= 256)
        {
            while(arr.length !== 256)
                {
                    arr.push(0)
                }
        }
    else if(256 < arr.length && arr.length <= 512)
        {
            while(arr.length !== 512)
                {
                    arr.push(0)
                }
        }
    else if(512 < arr.length && arr.length <= 1024)
        {
            while(arr.length !== 1024)
                {
                    arr.push(0)
                }
        }
    return arr;
}