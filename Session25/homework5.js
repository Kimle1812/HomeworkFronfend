function integer(arr){
    if(Array.isArray(arr)){
        if(arr.length==0){
            return "Mảng không chứa phần tử"
        }
        count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>0 && Number.isInteger(Number(arr[i]))){
                count++;
            }
        }
        count==0 ? console.log("Không có số nguyên dương trong mảng") : console.log(`Có ${count} số nguyên dương trong mảng`)
        console.log(`Giá trị nhỏ nhất là: ${minItem}`)
        return minItem;
    }
    console.log("Giá trị không hợp lệ")
}
let arr=[];
let number = +prompt("Nhập số lượng phần tử bạn muốn thêm vào mảng: ");
for (let i = 0; i < number; i++) {
    arr.push(+prompt("Nhập phần tử thứ "+(i+1)+": "));
}
console.log(arr);
integer(arr);
