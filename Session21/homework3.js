let password="kimle1812";
let password_use;
for(let i= 4;i>=0;i--){
    password_use=prompt("Mời bạn nhập mật khẩu");
    if(password_use === password){
        alert("Bạn đã nhập đúng password");
        break;
    }else{
        alert("Bạn nhập sai mật khẩu rồi! Bạn còn "+ i + " lần nhập");
    }
}
