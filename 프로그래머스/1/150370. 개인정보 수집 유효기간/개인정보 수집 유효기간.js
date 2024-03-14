function solution(today, terms, privacies) {
    const todayDate = new Date(today);
    let result = [];
    let termMap = {};
    
    for(let term of terms) {
        let [type, period] = term.split(' ');
        termMap[type] = Number(period);
    }
    
    for(let i = 0; i < privacies.length; i++) {
        let [privacyDate, privacyType] = privacies[i].split(' ');
        let privacyDateObj = new Date(privacyDate)
        
        let expireDate = new Date(privacyDateObj.setMonth(privacyDateObj.getMonth() + termMap[privacyType]))
        if(todayDate >=expireDate){
            result.push(i+1)
        }
    }
    
    return result
}
    