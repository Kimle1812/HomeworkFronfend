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

let evenNumber = arr.filter((item)=> (item % 2 == 0));
let totalEven = evenNumber.reduce((acc, cur)=>(acc + cur),0);

let oddNumber = arr.filter((item)=> (item % 2 == 1));
let totalOdd = oddNumber.reduce((acc, cur)=>(acc + cur),0);

console.log(`totalEven = ${totalEven}`);
console.log(`totalOdd = ${totalOdd}`);