function arithmetic(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    let check=arr[1] - arr[0];
    let flag=-1;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i + 1]  - arr[i] != check){
            flag=0;
            break;
        }
    }
    flag == 0 ? console.log("FALSE") : console.log("TRUE")
    console.log(arr);
    return arr;
}
arithmetic([2,4,6,8]);
arithmetic([3,6,9,12,14]);
arithmetic("abc");
