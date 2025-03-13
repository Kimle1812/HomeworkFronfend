function splitArr(arr, n) {
    if (!Array.isArray(arr)) {
        console.log(`Dữ liệu không hợp lệ`)
      return;
    }
  
    const result = [];
    for (let i = 0; i < arr.length; i += n) {
      result.push(arr.slice(i, i + n));
    }
    console.log(result)
    return result;
}

splitArr([1, 2, 3, 4, 5, 6, 7, 8], 3);
splitArr([1, 2, 3, 4, 5, 6, 7, 8], 4); 
splitArr("abc", 3); 
  