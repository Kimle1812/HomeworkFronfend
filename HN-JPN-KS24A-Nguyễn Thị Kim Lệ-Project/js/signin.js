function signin() {
    let email=document.getElementsByClassName("email")[0].value;
    let password=document.getElementsByClassName("password")[0].value;
    if (!email || !password) {
        document.getElementsByClassName("error")[0].style.display = "block";
        return;
    }
    let users= JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find((e)=> e.email == email);
    if(currentUser){
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        document.getElementsByClassName("success")[0].style.display = "flex";
        window.location.href = "http://127.0.0.1:5500/dashboardLayout.html";
    }else{
        document.getElementsByClassName("error-notExist")[0].style.display = "block";
    }
}
function hideExist() {
    document.getElementsByClassName("error-notExist")[0].style.display = "none";
}
function hide() {
    document.getElementsByClassName("error")[0].style.display = "none";
}