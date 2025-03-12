let users = [];
let emailUser = prompt("Mời bạn nhập email:");

if (checkEmail(emailUser)) {
    let flag = true;
    for (let i = 0; i < users.length; i++) {
        if (users[i] == emailUser) {
            flag = false;
            break;
        }
    }
    if (flag) {
        users.push(emailUser);
        console.log("Đã đăng kí thành công");
    } else {
        console.log("Tài khoản đã tồn tại");
    }
} else {
    console.log("Email không hợp lệ");
}
console.log(users);

function checkEmail(email) {
    if (email.indexOf("@") == -1 || email.indexOf("@") === 0) {
        console.log("Email phải chứa kí tự @");
        return false;
    }
    if (!email.endsWith(".com") && !email.endsWith(".vn")) {
        console.log("Email phải kết thúc bằng .com hoặc .vn");
        return false;
    }
    return true;
}
