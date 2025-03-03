let number=+prompt("Mời bạn nhập số nguyên cần kiểm tra");
if(Number.isInteger(number)){
    if(number % 5 == 0 && number % 3 == 0){
        console.log(number + " chia hết cho cả 3 và 5");
    }else{
        console.log(number + " không chia hết cho cả 3 và 5")
    }
}
