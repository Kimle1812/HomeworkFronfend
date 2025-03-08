let arr=["a",'b','c','4','5'];
if(arr.length>0){
    for(let i=0;i<arr.length;i++){
        if(Number.isInteger(Number(arr[i]))){
            console.log(arr[i])
        }
    }
}else{
    console.log("Mảng không có phần tử")
}