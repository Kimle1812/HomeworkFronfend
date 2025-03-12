function arrEven(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            console.log("Mảng không có phần tử nào");
            return;
        } else {
            let evenArr = arr.filter((item) => {
                return item % 2 === 0;
            });
            let squareEven = evenArr.map((item) => {
                return item * item;
            });
            console.log(squareEven);
            return;
        }
    }
    console.log("Dữ liệu không hợp lệ");
}

arrEven([2, 5, 10]);
