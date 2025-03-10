let str = ``;
let choice;
do {
    choice = +prompt(
        `                   MENU
        1. Nhập chuỗi ký tự
        2. Hiển thị chuỗi ký tự
        3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào
        4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.
        5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dùng nhập vào. Ví dụ: "Hello", “abcdefg" → “Haeblcldoefg”
        6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.
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
            let letters = 0, digits = 0;
            for (let char of str) {
                if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                    letters++;
                } else if (char >= '0' && char <= '9') {
                    digits++;
                }
            }
            console.log(`Số lượng ký tự chữ: ${letters}`);
            console.log(`Số lượng ký tự số: ${digits}`);
            break;
        case 4:
            let toggledStr = '';
            for (let char of str) {
                if (char >= 'A' && char <= 'Z') {
                    toggledStr += char.toLowerCase();
                } else if (char >= 'a' && char <= 'z') {
                    toggledStr += char.toUpperCase();
                } else {
                    toggledStr += char;
                }
            }
            console.log(toggledStr);
            break;
        case 5:
            let str2 = prompt(`Mời bạn nhập chuỗi thứ 2`);
            let mixedStr = '';
            for (let i = 0; i < Math.max(str.length, str2.length); i++) {
                if (i < str.length) mixedStr += str[i];
                if (i < str2.length) mixedStr += str2[i];
            }
            console.log(mixedStr);
            break;
        case 6:
            let words = [];
            let word = '';
            for (let char of str) {
                if (char === ' ') {
                    if (word.length > 0) {
                        words.push(word);
                        word = '';
                    }
                } else {
                    word += char;
                }
            }
            if (word.length > 0) {
                words.push(word);
            }
            words.sort((a, b) => a.length - b.length);
            console.log(words.join(' '));
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== 7);