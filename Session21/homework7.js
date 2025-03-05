let principal=+prompt("Mời bạn nhập số tiền gốc");
let interest_rate=+prompt("Mời bạn nhập lãi suất tháng");
let month=+prompt("Mời bạn nhập số tháng gửi");
if( Number.isInteger(month) && principal > 0 && interest_rate > 0 && month > 0){
    let result=(principal*Math.pow((1+(interest_rate/100)),month)).toFixed(3);
    console.log("Tiền lãi: ",(Number(result) - Number(principal)).toFixed(3));
    console.log("Tiền nhận được: ", result);
}else{
    console.log("Số bạn nhập không hợp lệ")
}

