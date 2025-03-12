arrSrting(["apple", "banana", "cat", "elephant", "dog"]);
function arrSrting(arr){
    if(Array.isArray(arr)){
        if(arr.length==0){
            console.log("Mảng không có phần tử nào");
            return;
        }else{
            let newArr=arr.filter((item)=>{
                return item.length > 5;
            })
            console.log(newArr);
            return newArr;
        }
    }
    console.log("Dữ liệu không hợp lệ")
}