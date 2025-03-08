let arr=["a",'b','c','-4','5'];
let sum=0;
let count=0;
if(arr.length>0){
    for(let i=0;i<arr.length;i++){
        if(Number.isInteger(Number(arr[i]))){
            sum+=Number(arr[i]);
            count++;
        }
    }
    if(count==0){
        console.log("Không có phần tử nào là số")
    }else{
        console.log(sum);
    }
}else if(arr.length==0){
    console.log("Mảng không có phần tử")
}else{
    console.log("Số lượng phần tử không hợp lệ")
}