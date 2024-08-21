function solution(numbers, hand) {
    let result = ''
    let handwhL = [0, 3];
    let handwhR = [2, 3];
    
    for(let i =0; i < numbers.length; i++)
        {
            if(numbers[i] === 1)
                {
                    result += 'L'
                    handwhL = [0, 0]
                }
            else if(numbers[i] === 4)
                {
                    result += 'L'
                    handwhL = [0, 1]
                }
            else if(numbers[i] === 7)
                {
                    result += 'L'
                    handwhL = [0, 2]
                }
            else if(numbers[i] === 3)
                {
                    result += 'R'
                    handwhR = [2, 0]
                }
            else if(numbers[i] === 6)
                {
                    result += 'R'
                    handwhR = [2, 1]
                }
            else if(numbers[i] === 9)
                {
                    result += 'R'
                    handwhR = [2, 2]
                }
            else if(numbers[i] === 2)
                {
                    let disL = Math.abs(handwhL[1]) + Math.abs(handwhL[0] - 1)
                    let disR = Math.abs(handwhR[1]) + Math.abs(handwhR[0] - 1)
                    if(disL > disR)
                        {
                            result += 'R'
                            handwhR = [1, 0]
                        }
                    else if(disL < disR)
                        {
                            result += 'L'
                            handwhL = [1, 0]
                        }
                    else
                        {
                            if(hand === 'right')
                                {
                                    result += 'R'
                                    handwhR = [1, 0]
                                }
                            else 
                                {
                                    result += 'L'
                                    handwhL = [1, 0]
                                }
                        }
                }
            else if(numbers[i] === 5)
                {
                    let disL = Math.abs(handwhL[1] - 1) + Math.abs(handwhL[0] - 1)
                    let disR = Math.abs(handwhR[1] - 1) + Math.abs(handwhR[0] - 1)
                    if(disL > disR)
                        {
                            result += 'R'
                            handwhR = [1, 1]
                        }
                    else if(disL < disR)
                        {
                            result += 'L'
                            handwhL = [1, 1]
                        }
                    else
                        {
                            if(hand === 'right')
                                {
                                    result += 'R'
                                    handwhR = [1, 1]
                                }
                            else 
                                {
                                    result += 'L'
                                    handwhL = [1, 1]
                                }
                        }
                }
            else if(numbers[i] === 8)
                {
                    
                    let disL = Math.abs(handwhL[1] - 2) + Math.abs(handwhL[0] - 1)
                    let disR = Math.abs(handwhR[1] - 2) + Math.abs(handwhR[0] - 1)
                    if(disL > disR)
                        {
                            result += 'R'
                            handwhR = [1, 2]
                        }
                    else if(disL < disR)
                        {
                            result += 'L'
                            handwhL = [1, 2]
                        }
                    else
                        {
                            if(hand === 'right')
                                {
                                    result += 'R'
                                    handwhR = [1, 2]
                                }
                            else 
                                {
                                    result += 'L'
                                    handwhL = [1, 2]
                                }
                        }
                }
            else if(numbers[i] === 0)
                {
                    let disL = Math.abs(handwhL[1] - 3) + Math.abs(handwhL[0] - 1)
                    let disR = Math.abs(handwhR[1] - 3) + Math.abs(handwhR[0] - 1)
                    if(disL > disR)
                        {
                            result += 'R'
                            handwhR = [1, 3]
                        }
                    else if(disL < disR)
                        {
                            result += 'L'
                            handwhL = [1, 3]
                        }
                    else
                        {
                            if(hand === 'right')
                                {
                                    result += 'R'
                                    handwhR = [1, 3]
                                }
                            else 
                                {
                                    result += 'L'
                                    handwhL = [1, 3]
                                }
                        }
                }
        }
    return result;
}