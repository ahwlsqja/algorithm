function solution(balls, share) {
    if (balls < share) {
        return 0; // share이 balls보다 클 경우 0 반환
    } else if (balls === share || share === 0) {
        return 1; // share이 0이거나 balls와 같을 경우 1 반환
    } else {
        let numerator = factorial(balls);
        let denominator = factorial(share) * factorial(balls - share);
        return Math.round(numerator / denominator); // 정수로 반환
    }
}

function factorial(n) {
    let result = 1;
    for (let i = n; i >=2; i--) {
        result *= i;
    }
    return result;
}


