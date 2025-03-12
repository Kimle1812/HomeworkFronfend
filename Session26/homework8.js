let arr = [];
let number = +prompt("Nhập số lượng số nguyên dương bạn muốn thêm vào mảng: ");
if (Number.isInteger(number) && number > 0) {
    for (let i = 0; i < number; i++) {
        let element = +prompt(`Nhập số thứ ${i + 1} vào mảng: `);
        arr.push(element);
    }
} else {
    console.log("Dữ liệu không hợp lệ");
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number == 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

let checkPrime = arr.filter((item) => {
    return (isPrime(item) && item % 2 == 1);
});

if (checkPrime.length == 0) {
    console.log("Mảng không có phần tử nào thỏa mãn");
} else {
    console.log(checkPrime);
}