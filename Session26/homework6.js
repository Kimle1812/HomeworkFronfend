
let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];
function number(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }

    let array = arr.map(date => {
        let day = date.split("-");
        if (day.length !== 3) {
            console.log("Dữ liệu không hợp lệ");
            return;
        }
        day.reverse();
        return day.join("/");
    });
    console.log(array);
    return array;
}
number(arr);
