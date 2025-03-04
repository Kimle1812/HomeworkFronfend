let number = +prompt("Mời bạn nhập số nguyên dương: ");
let result = [];
if (number <= 0 || !Number.isInteger(number)) {
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0) {
            result.push(i);
        }
    }
    alert(`Các số chia hết cho 5 từ 1 đến ${number} là: ${result}`);
}