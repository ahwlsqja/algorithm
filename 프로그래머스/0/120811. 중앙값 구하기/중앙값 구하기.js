function solution(array) {
  // 숫자 배열을 올바르게 정렬
  const sortedArray = array.sort((a, b) => a - b);
  
  // 배열의 길이가 짝수인 경우, 두 중앙값의 평균을 반환
  if (sortedArray.length % 2 === 0) {
    const mid1 = sortedArray[(sortedArray.length / 2) - 1];
    const mid2 = sortedArray[sortedArray.length / 2];
    return (mid1 + mid2) / 2;
  } else {
    // 배열의 길이가 홀수인 경우, 중앙값을 반환
    return sortedArray[Math.floor(sortedArray.length / 2)];
  }
}
