function solution(age) {
    const ab = 'abcdefghij';
    let ageInAlphabet ='';
    do {
        let digit = age % 10;
        age = Math.floor(age / 10);
        ageInAlphabet = ab[digit] + ageInAlphabet;
    } while (age > 0);
    
    return ageInAlphabet;
}