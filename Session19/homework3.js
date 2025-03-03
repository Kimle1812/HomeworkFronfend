let currency=prompt("Mời bạn nhập tiền tệ cần chuyển đổi(VND or USD)");
let money=prompt("Mời bạn nhập số tiền cần chuyển đổi")
let number;
switch(currency){
    case "VND":
        number=money*23000;
        console.log("USD -> VND: "+number);
        break;
    case "USD":
        number=money/23000;
        console.log("VND -> USD: "+number);
        break;
    default:
        console.log("Yêu cầu bạn nhập không hợp lệ");
        break;
}