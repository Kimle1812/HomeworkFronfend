let numbers=[2,5,7,4,1,8,6,2,5,7];
let number=+prompt("Mời bạn nhập số cần tìm");
let count=0;
if(Number.isInteger(number)){
    for(let i=0;i<numbers.length;i++){
        if(number==numbers[i]){
            count++;
        }
    }
    count==0 ? console.log(`số ${number} không tồn tại trong mảng`):console.log(`số ${number} xuất hiện ${count} lần trong mảng`);
}else{
    console.log("Số bạn nhập không hợp lệ")
}
