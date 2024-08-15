function solution(n, slicer, num_list) {
    let aa = [];
    if(n === 1)
        {
            return num_list.slice(0,slicer[1] + 1)
        }
    else if(n === 2)
        {
            return num_list.slice(slicer[0], num_list.length)
        }
    else if(n === 3)
        {
            return num_list.slice(slicer[0], slicer[1]+1)
        }
    else
        {
            for(let i=slicer[0]; i < slicer[1]+1; i+= slicer[2])
                {
                    aa.push(num_list[i])
                }
            return aa
        }
}