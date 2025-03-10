
let str = ``;
let choice;
do {
    choice = +prompt(
        `                   MENU
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi
        4. Đảo ngược chuỗi kí tự
        5. Đếm số lượng từ trong chuỗi kí tự
        6. Tìm kiếm và thay thế kí tự trong chuỗi gốc
        7. Thoát chương trình
        Lựa chọn của bạn: 
        `);
    switch (choice) {
        case 1:
            str = prompt(`Mời bạn nhập chuỗi `);
            console.log(str);
            break;
        case 2: 
            console.log(str);
            break;
        case 3: 
            console.log(str.trim());
            break;
        case 4:
            str = str.split('').reverse().join('');
            console.log(str);
            break;
        case 5:
            let array = str.split('');
            let wordCount = 1;
            for (let i = 0; i < array.length; i++) {
                if (array[i] == " ") {
                    wordCount++;
                }
            }
            console.log(`Số lượng từ trong chuỗi là ${wordCount}`);
            break;
        case 6:
            let findChar = prompt('Mời bạn nhập kí tự muốn tìm trong chuỗi: ');
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === findChar) {
                    count++;
                }
            }
            if (count > 0) {
                let replaceChar = prompt('Tìm thấy kí tự. Mời bạn nhập kí tự thay thế: ');
                str = str.split(findChar).join(replaceChar);
                console.log(`Kí tự ${findChar} xuất hiện ${count} lần trong chuỗi. Chuỗi mới là: ${str}`);
            } else {
                console.log(`Kí tự ${findChar} không xuất hiện trong chuỗi`);
            }
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== 7);
