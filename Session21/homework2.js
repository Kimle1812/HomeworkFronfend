let even=0;
let odd=0;
let number;
let flag=true;
for(let i=0;i<5;i++){
    number=+prompt("Mời bạn nhập số nguyên:");
    if(Number.isInteger(number)){
        if(number%2==0){
            even=even+1;
        }else{
            odd=odd+1;
        }
    }else{
        flag=false;
        console.log("Số bạn nhập không phải số nguyên");
        break;
    }
}
if(flag){
    console.log("Có " + even + " số chẵn trong chuỗi số đã nhập");
    console.log("Có " + odd + " số lẻ trong chuỗi số đã nhập");
}
