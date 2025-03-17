let choice;
let users=[];
do{
    choice=+prompt(`
        1. Đăng ký
        2. Đăng nhập
        3. Thoát
        `)
    switch (choice) {
        case 1://Đăng ký
            registerUser(users);
            break;
        case 2://Đăng nhập
            loginUser();
            break;
        case 3://Thoát
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }
}while(choice!=3);

//Đăng ký
function registerUser(users) {
    let name = prompt("Mời bạn nhập tên của bạn:");
    let email = prompt("Mời bạn nhập email:");
    if (!checkEmail(email, users)) {
        console.log("Email không hợp lệ hoặc đã tồn tại. Vui lòng thử lại.");
        return;
    }
    let password = prompt("Mời bạn nhập mật khẩu:");
    if (!isStrongPassword(password)) {
        console.log("Mật khẩu không hợp lệ. Vui lòng thử lại.");
        return;
    }
    let user = {
        name: name,
        email: email,
        password: password
    };
    users.push(user);
    console.log("Đăng ký thành công!");
}
//Đăng nhập
function loginUser(){
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        console.log(`Xin chào, ${user.name}! Đăng nhập thành công.`);
    } else {
        console.log("Email hoặc mật khẩu không đúng.");
    }
}

//Check Email
function checkEmail(email,users){
    for(let i =0;i<email.length;i++){
        if(!email.includes("@") && !email.endsWith(".com"||!email.endsWith(".vn"))){
            return false;
        }
    }
    if (users.includes(email)) {
        return false;
    }
    return true;
}

//CheckPassWord
function isStrongPassword(password) {
    if (password.length < 6) {
        return false;
    }
    
    let isNumber = false;
    let isUpperCase = false;
    let isLowerCase = false;
    
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= '0' && char <= '9') {
            isNumber = true;
        } else if (char >= 'A' && char <= 'Z') {
            isUpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            isLowerCase = true;
        }
    }
    if (!isNumber || !isUpperCase || !isLowerCase) {
        return false;
    }
    return true;
}