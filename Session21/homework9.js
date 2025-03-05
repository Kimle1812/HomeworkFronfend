let number=+prompt("Mời bạn nhập số cần kiểm tra");
let flag=true;
if(Number.isInteger(number) && number>=0){
    for(let i=2;i<number;i++){
        if(number%i==0){
            flag=false;
            break;
        }
    }
    if(!flag){
        console.log("Số bạn nhập không phải là số nguyên tố")
    }else{
        console.log("Số bạn nhập là số nguyên tố")
    }

}else{
    console.log("Số bạn nhập không hợp lệ")
}