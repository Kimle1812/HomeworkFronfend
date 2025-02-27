let money=+prompt("Nhập số tiền cần gửi:");
let month=+prompt("Nhập số tháng cần gửi:");
let interest=((money*(4.3/100)/12)*month);
let result=Math.round(interest).toLocaleString();
alert("Số tiền lãi của bạn là: "+ result);