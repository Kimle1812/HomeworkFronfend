let array = [];
let choice;
do {
    choice = +prompt(
        `               MENU
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tính tổng đường chéo chính
        5. Tính tổng đường chéo phụ
        6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột
        7. Thoát
        Lựa chọn của bạn: 
        `);
    switch (choice) {
        case 1:
            let row = +prompt("Nhập số hàng: ");
            if (Number.isInteger(row) && row > 0) {
                let column = +prompt("Nhập số cột: ");
                if (Number.isInteger(column) && column > 0) {
                    for (let i = 0; i < row; i++) {
                        array[i] = [];
                        for (let j = 0; j < column; j++) {
                            array[i][j] = +prompt(`Nhập phần tử hàng ${i} cột ${j}: `);
                        }
                    }
                    console.log(array);
                } else {
                    console.log("Vui lòng nhập số nguyên dương!");
                }
            } else {
                console.log("Vui lòng nhập số nguyên dương!");
            }
            break;
        case 2:
            console.log(array);
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    sum += array[i][j];
                }
            }
            console.log(`Tổng các phần tử trong mảng là ${sum}`);
            break;
        case 4:
            let mainSum = 0;
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (i == j) {
                        mainSum += array[i][j];
                    }
                }
            }
            console.log(`Tổng các phần tử trên đường chéo chính là ${mainSum}`);
            break;
        case 5:
            let subSum = 0;
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (i + j == array.length - 1) {
                        subSum += array[i][j];
                    }
                }
            }
            console.log(`Tổng các phần tử trên đường chéo chính là ${subSum}`);
            break;
        case 6:
            let average;
            let select = +prompt(
                `Bạn muốn tính trung bình cộng các phần tử theo hàng hay theo cột
                1. Theo hàng
                2. Theo cột
                `);
            switch (select) {
                case 1:
                    let rowSum = 0;
                    let row = +prompt(`Bạn muốn tính trung bình cộng của hàng nào: `);
                    if (Number.isInteger(row) && row >= 0 && row < array.length) {
                        for (let i = 0; i < array.length; i++) {
                            for (let j = 0; j < array[i].length; j++) {
                                if (i == row) {
                                    rowSum += array[i][j];
                                }
                            }
                        }
                        average = rowSum / array.length;
                        console.log(`Trung bình cộng các phần tử trên hàng ${row} là ${average}`);
                        break;
                    } else {
                        console.log(`Dữ liệu nhập vào không hợp lệ`);
                        break;
                    }
                case 2:
                    let colSum = 0;
                    let col = +prompt(`Bạn muốn tính trung bình cộng của cột nào: `);
                    if (Number.isInteger(col) && col >= 0 && col < array.length) {
                        for (let i = 0; i < array.length; i++) {
                            for (let j = 0; j < array[i].length; j++) {
                                if (j == col) {
                                    colSum += array[i][j];
                                }
                            }
                        }
                        average = colSum / array.length;
                        console.log(`Trung bình cộng các phần tử trên cột ${col} là ${average}`);
                        break;
                    } else {
                        console.log(`Dữ liệu nhập vào không hợp lệ`);
                        break;
                    }
                default:
                    console.log("Lựa chọn không hợp lệ");
                    break;
            }
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            break;
    }
} while (choice != 7);