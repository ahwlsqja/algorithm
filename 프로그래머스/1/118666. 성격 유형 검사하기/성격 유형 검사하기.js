function solution(survey, choices) {
    const choiceMap = new Map();
    choices.forEach((choice, i) => {
        let type;
        if(choice < 4) 
            {
                type = survey[i][0];
            }
        else if(choice > 4){
            type = survey[i][1];
        }
        
        let score;
        if(choice === 1 || choice === 7){
            score = 3;
        }
        else if(choice === 2 || choice == 6){
            score = 2;
        }
        else if(choice === 3 || choice == 5){
            score = 1;
        }
        else{
            score = 0;
        }
        
        choiceMap.set(type, (choiceMap.get(type) || 0) + score); // 해당 타입의 점수를 가져와 새로운 점수를 더하고 다시 저장함. 없으면 0 매핑
    })
    
    function countIndex(a, b) {
        const A = choiceMap.get(a) || 0;
        const B = choiceMap.get(b) || 0;
        
        return A >= B ? a : b;
    }

    return countIndex('R', 'T') + countIndex('C', 'F') + countIndex('J', 'M') + countIndex('A', 'N')
    
    
}
    
