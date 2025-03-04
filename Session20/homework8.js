let number = +prompt("Nhập số số nguyên tố bạn muốn tìm: ");
let check = false;
let result = "";
if (number <= 0 || !Number.isInteger(number)) {
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    for (let i = 2; i < 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                check = true;
                break;
            }
        }
        if (!check) {
            result += i + " ";
        }
        check = false;
        if (result.split(" ").length == number + 1) {
            break;
        }
    }
    alert(`${number} số nguyên tố đầu tiên là: ${result}`);
}