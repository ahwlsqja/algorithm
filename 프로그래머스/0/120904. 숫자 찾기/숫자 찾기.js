function solution(num, k) {
   const numStr = num.toString();
   const index = numStr.indexOf(k.toString())
   
   if(index === -1){
       return -1
   }
    return index+1
}