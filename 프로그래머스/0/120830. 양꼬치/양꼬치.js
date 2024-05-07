function solution(n, k) {
    if(n>=10){
        return 12000*n+2000*(k-parseInt(n/10));
    }
    else{
        return 12000*n+2000*k;
    }
}