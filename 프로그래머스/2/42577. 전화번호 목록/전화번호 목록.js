function solution(phone_book) {
    let book_obj = {}
      const hashTable = {};

// 요소를 해시 테이블에 저장한다.
  for (const number of phone_book) {
    hashTable[number] = true;
  };

  for (const number of phone_book) {
    for (let i = 1; i < number.length; i++) {
      const prefix = number.substring(0, i);
      if (hashTable[prefix]) return false;  
    };
  };

// 전부 통과했다면 true를 반환한다.
  return true;
}