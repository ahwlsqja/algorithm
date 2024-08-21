function solution(nums) {
    let uniquenums = [...new Set(nums)];
    if(uniquenums.length >= nums.length / 2)
        {
            return nums.length / 2
        }
    else if(uniquenums.length < nums.length / 2)
        {
            return uniquenums.length
        }
}

