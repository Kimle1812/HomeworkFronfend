let hour=+prompt("Mời bạn nhập số giờ");
let minute=+prompt("Mời bạn nhập số phút");
let second=+prompt("Mời bạn nhập số giây");
let result;
if(hour >= 12 && hour <= 23){
    result = hour - 12;
    alert(result + " : " + minute + " : " + second + " PM");
} else if(hour > 0 && hour < 12){
    alert(hour + " : " + minute + " : " + second + " AM");
} else if(hour == 0){
    alert("12" + " : " + minute + " : " + second + " AM");
} else {
    alert("Bạn nhập sai thời gian");
}