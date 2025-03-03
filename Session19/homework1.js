let month=+prompt("Mời bạn nhập số tháng");
if(month <= 12 && month >= 1){
    if(month == 2){
        console.log("Tháng 2 có 28 hoặc 29 ngày năm nhuận");
    }else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        console.log("Tháng " + month + "có 31 ngày");
    }else{
        console.log("Tháng " + month + "có 30 ngày");
    }
}else{
    console.log("Tháng không hợp lệ");
}
