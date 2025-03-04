let a = +prompt("Nhập số nguyên a: ");
let b = +prompt("Nhập số nguyên b: ");
let result = 1;
if (Number.isInteger(a) && a !== 0 && Number.isInteger(b)) {
    for (let i = 0; i < Math.abs(b); i++) {
        b > 0 ? result *= a : result *= 1 / a;
    }
    console.log(result);    
} else {
    console.log("Không hợp lệ");  
}