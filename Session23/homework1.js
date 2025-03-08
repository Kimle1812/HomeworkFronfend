let arr=[1,22,12,8,7,9];
let array=[1,2,3,4,5];
let flag;
for(let i = 0; i< arr.length;i++){
    if(arr[i]>10){
        console.log(arr[i]);
    }
}
for(let i = 0; i< array.length;i++){
    flag=true;
    if(array[i]>10){
        console.log(array[i]);
    }
    else{
        flag =false;
        break;
    }
}
if(!flag){
    console.log("Không có số nào lớn hơn 10")
}