let arr = [0, 1, "", null, "Hello", undefined, 42, NaN, "World", false];
let fillArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) { 
        fillArr.push(arr[i]);
    }
}
console.log(fillArr);
