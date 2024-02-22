function solution(s, skip, index) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let answer = "";
    for(let i = 0; i< s.length; i++)
        {
            let curIndex = alphabet.indexOf(s[i]);
            let newIndex = curIndex;
            for(let j=0; j < index; j++)
                {
                    newIndex = (newIndex+1)%26;
                    while(skip.includes(alphabet[newIndex])){
                        newIndex = (newIndex+1)%26;
                    }
                }
            answer += alphabet[newIndex]
        }
    return answer;
}

