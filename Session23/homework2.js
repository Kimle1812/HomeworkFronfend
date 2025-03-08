let arr=[];
let max=arr[0];
let index=0;
let flag=true;
if(arr.length==0){
    flag=false;
}else{
    for(let i = 0; i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
            index=i;
        }
    }
}
if(flag){
    console.log("Số lớn nhất: ", max);
    console.log("Vị trí: ", index);
}else{
    console.log("Không có số lớn nhất");
}