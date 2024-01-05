function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let k = 1; k < arr.length; k++) {
      if (arr[k] < pivot) {
        left.push(arr[k]);
      } else {
        right.push(arr[k]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }







function solution(arr, divisor) {
    let list = [];
    let sorted_list = [];
    for(let i =0 ; i<arr.length;i++)
        {
            if(arr[i] % divisor === 0)
                {
                    list.push(arr[i]);
                }
        }
    if(list.length === 0)
        {
            list.push(-1);
        }

    return quickSort(list);
}