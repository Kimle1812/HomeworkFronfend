let number_a=prompt("Mời bạn nhập số thứ nhất");
let number_b=prompt("Mời bạn nhập số thứ hai");
let number_c=prompt("Mời bạn nhập số thứ ba");
if(Number.isInteger(number_a) && Number.isInteger(number_b) && Number.isInteger(number_c)){
    console.log("Số lớn nhất trong 3 số là " , Math.max(number_a,number_b,number_c));
}else{
    console.log("Số nhập không hợp lệ")
}