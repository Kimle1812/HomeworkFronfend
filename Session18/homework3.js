let name=prompt("Mời bạn nhập tên đăng nhập của bạn");
switch (name) {
    case "ADMIN":
        let password=prompt("Mời bạn nhập mật khẩu");
        switch (password) {
            case "TheMaster":
                console.log("Welcome");
                break;
            case null:
                console.log("Cancelled");
                break;
            default:
                console.log("Wrong password");
                break;
        }
        break;
    case null:
        console.log("Cancelled");
        break;  
    default:
        console.log("I Don't know you");
        break;
}