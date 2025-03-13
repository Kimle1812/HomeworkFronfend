function sortArr(arr) {
    if (!Array.isArray(arr)) {
        console.log(`Dữ liệu không hợp lệ`)
      return;
    }
    let evenArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0 ){
            evenArr.push(arr[i]);
        }
    }
    evenArr=evenArr.sort();
    let index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0 ){
            arr[i]=evenArr[index];
            index++;
        }
    }
    console.log(arr);
    return arr;
}
sortArr([5,8,6,3,4,2,77]);
sortArr([5,9,6,4,1,8,3]);
sortArr("abc");