let number;
let result=0;
let flag=true;
for(let i=0;i<5;i++){
    number=+prompt("Mời bạn nhập số nguyên:");
    if(Number.isInteger(number)){
        if(number%2!=0 ){
            result = result + number;
        }
    }else{
        flag=false;
        console.log("Số bạn nhập không phải số nguyên");
        break;
    }
}
if(flag){
    console.log("Tổng của các số lẻ là " + result);
}