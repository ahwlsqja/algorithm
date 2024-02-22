function solution(s) {
    let count = 0;
    let sameCharCount = 0;
    let diffCharCount = 0;
    // 문자열 첫번째 인덱스 설정
    let firstChar = s[0];
    
    for(let i = 0;i<s.length;i++){
        if(s[i] === firstChar)
            {
                sameCharCount +=1;
            }else{
                diffCharCount +=1;            
        }
    
    if(sameCharCount === diffCharCount){
        count ++
        if(i + 1 < s.length){
            firstChar = s[ i + 1];
        }
        sameCharCount = 0;
        diffCharCount = 0;
    }
}
    if(sameCharCount !== 0 || diffCharCount !== 0){
        count += 1;
    }
    
    
    return count
}