let arr=[2,4,6,1,8,9]
if(arr.length>0){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]>arr[i-1]){
            console.log(arr[i-1]);
            break;
        }
    }
}else if(arr.length==0){
    console.log("Mảng không có phần tử")
}else{
    console.log("Số lượng phần tử không hợp lệ")
}