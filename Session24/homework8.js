let str = ``;
let choice;
do {
    choice = +prompt(
        `                   MENU
        1. Nhập chuỗi kí tự
        2. Hiển thị chuỗi kí tự
        3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
        4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
        5. Tìm số lần xuất hiện nhiều nhất của các kí tự trong chuỗi
        6. Chuyển đổi kí tự thành dạng snake_case
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
            let wordCounts = {};
            for (let word of words) {
                word = word.toLowerCase();
                wordCounts[word] = (wordCounts[word] || 0) + 1;
            }
            for (let word in wordCounts) {
                if (wordCounts[word] > 1) {
                    console.log(`Từ '${word}' xuất hiện ${wordCounts[word]} lần`);
                }
            }
            break;
        case 4:
            let wordArr = [];
            let tempWord = '';
            for (let char of str) {
                if (char === ' ') {
                    if (tempWord.length > 0) {
                        wordArr.push(tempWord);
                        tempWord = '';
                    }
                } else {
                    tempWord += char;
                }
            }
            if (tempWord.length > 0) {
                wordArr.push(tempWord);
            }
            let minWord = wordArr.reduce((min, word) => word.length < min.length ? word : min, wordArr[0]);
            let maxWord = wordArr.reduce((max, word) => word.length > max.length ? word : max, wordArr[0]);
            console.log(`Từ có độ dài nhỏ nhất: ${minWord}`);
            console.log(`Từ có độ dài lớn nhất: ${maxWord}`);
            break;
        case 5:
            let charCounts = {};
            for (let char of str) {
                charCounts[char] = (charCounts[char] || 0) + 1;
            }
            let maxCount = 0;
            for (let char in charCounts) {
                if (charCounts[char] > maxCount) {
                    maxCount = charCounts[char];
                }
            }
            for (let char in charCounts) {
                if (charCounts[char] === maxCount) {
                    console.log(`Kí tự '${char}' xuất hiện nhiều nhất với ${maxCount} lần`);
                }
            }
            break;
        case 6:
            let snake_case = '';
            for (let i = 0; i < str.length; i++) {
                if (str[i] === ' ') {
                    snake_case += '_';
                } else {
                    snake_case += str[i].toLowerCase();
                }
            }
            console.log(`Chuỗi dạng snake_case: ${snake_case}`);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== 7);