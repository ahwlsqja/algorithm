function solution(n, lost, reserve) {
    // 1. data filtering
    let reserve_lost = reserve.filter(a => !lost.includes(a)).sort((a, b) => a - b);
    // 체육복을 가져 왔는데 2개있는 사람들
    let lost_reverve = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    // 체육복을 잃어버렸지만 여분의 체육복이 없는사람들
    
    // 2. 순회돌면서 빌려주면서 카운팅
    reserve_lost.forEach(a => {
        let front_stu = a - 1;
        // 체육복 빌려줄 수 있는 학생들 중에서 앞에 있는 학생 
        let back_stu =  a + 1;
        // 체육복 빌려줄 수 있는 학생들 중에서 뒤에 있는 학생
        
        // a바로 앞에 있는 학생이 체육복을 잃어버렸지만 여분의 체육복이 없는 사람들 일경우
        if(lost_reverve.includes(front_stu)){
        // 필터링함 체육복을 잃어버렸지만 여분의 체육복이 없는 사람들 에서 그 사람이 번호지움
            lost_reverve=lost_reverve.filter(l => l !== front_stu)
        }
        // a바로 뒤에 있는 학생이 체육복을 잃어버렸지만 여분의 체육복이 없는 사람들 일경우
        else if(lost_reverve.includes(back_stu)){
            lost_reverve=lost_reverve.filter(l => l !== back_stu)
        }
    })
    
    return n - lost_reverve.length;
}


