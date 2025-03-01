let number=+prompt("Mời bạn nhập số năm kinh nghiệm");
if(number<1){
    console.log("Mới vào nghề");
} else if(number<=3){
    console.log("Nhân viên có kinh nghiệm");
}else if(number<=6){
    console.log("Chuyên viên");
} else{
    console.log("Quản lý");
}