function solution(str) {
  let count = 0
  for(let i =0;i<str.length;i++) {
    let j=i;
    const stack = []
    for(let k =0;k<str.length;k++) {
      if(str[j] === undefined) j = 0
      stack.push(str[j])
      if(str[j] === ']' && stack[stack.length-2] === '['

||
        str[j] === ')' && stack[stack.length-2] === '('

||
        str[j] === '}' && stack[stack.length-2] === '{'
        ) {
        stack.length = stack.length - 2
      }
      j++
    }
    if(!stack.length) count++
  }
  return count
}