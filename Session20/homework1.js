let number=+prompt("Mời bạn nhập n số cần tổng");
let result=0;
if(Number.isInteger(number) && number > 0){
    for(let i=0;i <= number;i++){
        result = Number(result) + i;
    }
    console.log(result);
}else{
    console.log("dữ liệu nhập vào không hợp lệ");
}