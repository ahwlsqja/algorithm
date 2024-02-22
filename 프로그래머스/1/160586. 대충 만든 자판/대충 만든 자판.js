function solution(keymap, targets) {
    var answer = [];
    let targets_dividing = []
    let flag = false;
    for(let i=0; i< targets.length; i++){
        targets_dividing = targets[i].split("");
        let trials = 0;
        for(let j=0; j< targets_dividing.length; j++) // 문자열에서 한문자 스코프
            {
                flag = false;
                let trial = 101;
                for(let k=0; k < keymap.length; k++){
                        if(keymap[k].includes(targets_dividing[j]))
                            {
                                trial = Math.min(keymap[k].indexOf((targets_dividing[j])) + 1, trial) // 최솟값 
                                flag = true
                            }
                    }
            if(!flag)
            {
                trials = -1; 
                break;
            }
            trials += trial
        }
        answer.push(trials)   
    }
    return answer;
}