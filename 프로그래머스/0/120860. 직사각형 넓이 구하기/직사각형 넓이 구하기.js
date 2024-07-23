function solution(dots) {
    let xx = 0;
    let aa = 0;
    for(let i =1; i< dots.length; i++)
        {
			if(dots[0][0] === dots[i][0])
                {
                    xx = Math.abs(dots[0][1] - dots[i][1])
                }
            if(dots[0][1] === dots[i][1])
                {
                    aa = Math.abs(dots[0][0] -dots[i][0])
                }
        }
    return xx * aa
}