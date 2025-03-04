let str = prompt("Nhập vào một chuỗi: ");
let search = prompt("Nhập vào kí tự cần tìm: ");
let check = false;
for (let i = 0; i < str.length; i++) {
    if (str[i] === search) {
        check = true;
        break;
    } else {
        check = false;
    }
}
if (check == true) {
    console.log("Tồn tại từ cần tìm kiếm");
} else {
    console.log("Không tồn tại từ cần tìm kiếm");
}