let choice;
let number_a;
let number_b;
let result;
do{
    number_a= +prompt("Mời bạn nhập số thứ nhất: ");
    number_b= +prompt("Mời bạn nhập số thứ hai: ");
}while(!Number.isInteger(number_a) && !Number.isInteger(number_b))
do{
    choice=+prompt(
        `               MENU
        1. Cộng hai số.
        2. Trừ hai số.
        3. Nhân hai số.
        4. Chia hai số.
        5. Thoát.
        `)
    switch (choice) {
        case 1://Cộng hai số
            result=number_a+number_b;
            console.log(`Tổng hai số là ${result}`);
            break;
        case 2://Trừ hai số
            result=number_a-number_b;
            console.log(`Hiệu hai số là ${result}`);
            break;
        case 3://Nhân hai số
            result=number_a*number_b;
            console.log(`Nhân hai số là ${result}`);
            break;
        case 4://Chia hai số
            result=number_a/number_b;
            console.log(`Chia hai số là ${result}`);
            break;
        case 5://Thoát
            console.log("Cảm ơn bạn đã sử dụng chương trình")
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}while(choice!=5)