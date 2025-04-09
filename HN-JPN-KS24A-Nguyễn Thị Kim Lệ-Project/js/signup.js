function signup() {
    let email=document.getElementsByClassName("email")[0].value;
    let username=document.getElementsByClassName("username")[0].value;
    let password=document.getElementsByClassName("password")[0].value;
    if (!email || !password || !username) {
        document.getElementsByClassName("error")[0].style.display = "block";
        document.getElementsByClassName("invalid")[0].innerHTML = "Thông tin không được để trống";
        return;
    }
    if(!email.includes("@") && (!email.endsWith(".com") || !email.endsWith(".vn"))){
        document.getElementsByClassName("invalid")[0].innerHTML = "Email không hợp lệ";
        document.getElementsByClassName("error")[0].style.display = "block";
        return;
    }
    if(password.length < 8){
        document.getElementsByClassName("error")[0].style.display = "block";
        document.getElementsByClassName("invalid")[0].innerHTML = "Mật khẩu phải có ít nhất 8 kí tự";
        return;
    }
    let users= JSON.parse(localStorage.getItem("users")) || [];
    let findUser = users.find((item) => item.email == email);
    if(findUser){
        document.getElementsByClassName("error")[0].style.display = "block";
        document.getElementsByClassName("invalid")[0].innerHTML = "Email đã tồn tại";
        return;
    }
    let newUser={
        id: users.length + 1,
        username: username,
        email: email,
        password: password,
        created_at: new Date().toISOString(),
        boards: []
    }
    users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users));

    document.getElementsByClassName("success")[0].style.display = "block";
    window.location.href = "http://127.0.0.1:5500/pages/signin.html";
}
function hide() {
    document.getElementsByClassName("error-notExist")[0].style.display = "none";
}
function hide() {
    document.getElementsByClassName("error")[0].style.display = "none";
}