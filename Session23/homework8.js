let fibonacci=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
let arr=[];
let number = +prompt("Nhập số lượng phần tử bạn muốn thêm vào mảng: ");
for (let i = 0; i < number; i++) {
    arr.push(+prompt("Nhập phần tử thứ "+(i+1)+": "));
}
console.log(arr);
if(arr.length>0){
    if(fibonacci.toString().includes(arr.toString())){
        console.log("Là dãy số fibonacci")
    }else{
        console.log("Không phải là dãy số fibonacci")
    }
}else if(arr.length==0){
    console.log("Mảng không có phần tử")
}else{
    console.log("Số lượng phần tử không hợp lệ")
}