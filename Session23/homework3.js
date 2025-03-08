let arr=[];
let count=0;
if(arr.length>0){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++;
        }
    }
    console.log(count)
}else if(arr.length==0){
    console.log("Mảng không có phần tử")
}else{
    console.log("Số lượng phần tử không hợp lệ")
}