function solution(phone_number) {
    var answer = '';
    for(let i =0; i < phone_number.length-4; i++)
        {
            answer +="*";
        }
    answer += (phone_number[phone_number.length-4] + phone_number[phone_number.length-3]+phone_number[phone_number.length-2]+phone_number[phone_number.length-1]);
    return answer;
}