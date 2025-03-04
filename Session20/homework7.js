
let number = +prompt("Nhập số nguyên dương: ");
let result = "1, 1, ";
if (number <= 0 || !Number.isInteger(number)) {
    console.log('Không hợp lệ');
} else {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= number; i++) {
        let c = a + b;
        result += c + ", ";
        a = b;
        b = c;
    }
    console.log(result.substring(0, result.length - 2));
}
