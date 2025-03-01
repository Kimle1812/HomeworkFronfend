let year=+prompt("Mời bạn nhập số năm");
if(year%4==0 && year%100!=0 || year%400==0){
    console.log("Năm bạn nhập là năm nhuận");
}else{
    console.log("Năm bạn nhập không phải là năm nhuận");
}