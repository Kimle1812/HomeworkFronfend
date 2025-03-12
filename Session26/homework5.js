let arr = [];
let index;
let number = +prompt("Nhập số lượng số nguyên dương bạn muốn thêm vào mảng: ");
if (Number.isInteger(number) && number > 0) {
    for (let i = 0; i < number; i++) {
        let element = +prompt(`Nhập số thứ ${i + 1} vào mảng: `);
        arr.push(element);
    }
} else {
    console.log("Dữ liệu không hợp lệ");
}

let result = arr.reduce((acc, cur)=>{
    return cur > acc ? cur : acc;
}, arr[0])

for (let i = 0; i < arr.length; i++) {
    if (result == arr[i]) {
        index = i;
    }
}

console.log(`max = ${result}`);
console.log(`position = ${index}`);
