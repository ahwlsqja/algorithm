function solution(ingredient) {
    var answer = 0;
    const bergercre =[1, 2, 3, 1];
    for(let i =3; i < ingredient.length; i++)
        {
            const last = ingredient.slice(i-3,i+1);
            if(JSON.stringify(last) === JSON.stringify(bergercre)){
                ingredient.splice(i-3, 4);
                i -= 4;
                answer++;
            }
        
        
        }

    return answer;
}


// 스택 

// 현재 재료 "빵" and 스택의 꼭대기요소 빵?
//