let number = +prompt("Mời bạn nhập số nguyên dương: ");
let textNumber = number.toString();
let check = false;
if (Number.isInteger(number)) {
    for (let i = 0; i < textNumber.length/2; i++) {
        if (textNumber[i] !== textNumber[textNumber.length - 1 - i]) {
            check = false;
            break;
        } else {
            check = true;
        }
    }
    if (check) {
        console.log("Là số đối xứng");
    } else {
        console.log("Không phải số đối xứng");
    }     
} else {
    console.log("Số không hợp lệ");
}