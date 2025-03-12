function findMin(arr){
    if(Array.isArray(arr)){
        if(arr.length==0){
            return "Mảng không chứa phần tử"
        }
        let minItem=arr[0];
        for(let i=0;i<arr.length;i++){
            if(arr[i]< minItem){
                minItem=arr[i];
            }
        }
        console.log(`Giá trị nhỏ nhất là: ${minItem}`)
        return minItem;
    }
    console.log("Giá trị không hợp lệ")
}
findMin([4,1,8,9]);