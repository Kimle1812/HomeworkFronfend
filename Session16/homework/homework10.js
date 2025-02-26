let firstNumber=+prompt("Mời bạn nhập số thứ nhất");
let secondNumber=+prompt("Mời bạn nhập số thứ hai");
let max=Math.max(firstNumber,secondNumber);
let min=Math.min(firstNumber,secondNumber);
let number=Math.floor(Math.random() * (max - min + 1) ) + min;
document.write("Số ngẫu nhiên trong hai số là: ", number);