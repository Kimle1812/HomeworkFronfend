let choice;
let string="";
do{
    choice=+prompt(
        `               MENU
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài của chuỗi
        4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
        5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
        6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
        7. Thoát chương trình
        Lựa chọn của bạn là:
        `)
    switch(choice){
        case 1:
            //Nhập chuỗi
            string=prompt("Mời bạn nhập chuỗi")
            console.log(string)
            break;
        case 2:
            //Hiển thị chuỗi
            console.log(`Chuỗi bạn đã nhập là: ${string}`)
            break;
        case 3:
            //Tính độ dài của chuỗi
            console.log(`Độ dài của chuỗi là ${string.length}`)
            break;
        case 4:
            //Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
            let text=prompt("Mời bạn nhập kí tự cần tìm: ")
            let count=0;
            if(text.length > 0 && text.length < string.length){
                for(let i=0;i<string.length;i++){
                    string.charAt(i)==text ? count++ : count
                }
                count<=0 ? console.log("Kí tự bạn nhập không có trong chuỗi") : console.log(`kí tự ${text} xuất hiện ${count} lần`)
            }else{
                console.log("Bạn nhập không hợp lệ")
            }
            break;
        case 5:
            //Kiểm tra chuỗi có phải là chuỗi đối xứng không
            let flag=true;
            for(let i=0;i<string.length/2;i++){
                if(string.charAt(i) != string.charAt(string.length-1 -i)){
                    flag=false;
                    break;
                }
            }
            if(flag){
                console.log("Chuỗi là chuỗi đối xứng")
            }else{
                console.log("Chuỗi không phải là chuỗi đối xứng")
            }
            break;
        case 6:
            //Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từaa
            let arr1 = string.split(" ");
            console.log(arr1);
            for (let i = 0; i < arr1.length; i++) {
                arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1); 
            }
            string = arr1.join(" ")
            console.log(str);
            break;
        case 7:
            //Thoát chương trình
            console.log("Cảm ơn bạn đã sử dụng chương trình")
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}while(choice!=7);