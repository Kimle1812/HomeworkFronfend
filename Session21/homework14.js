let length = +prompt("Nhập chiều dài của hình chữ nhật: ");
let width = +prompt("Nhập chiều rộng của hình chữ nhật: ");
let icon = "";
if (!Number.isInteger(length) || !Number.isInteger(width) || length <= 0 || width <= 0) {
    console.log("Dữ liệu nhập vào không hợp lệ");
} else {
    for (let i = 1; i <= width; i++) {
        for (let j = 1; j <= length; j++) {
            if (i == 1 || i == width || j == 1 || j == length) {
                icon += "*";
            } else {
                icon += "&nbsp;&nbsp;";
            }
        }
        document.write(icon);
        icon = "<br>";
    }
}