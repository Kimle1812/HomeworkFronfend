let money = +prompt("Nhập số tiền cần rút: ");
let count = 0;
if (!Number.isInteger(money) || money <= 0) {
    console.log("Dữ liệu nhập vào không hợp lệ");
} else {
    while (money >= 500000) {
        money -= 500000;
        count++;
    }
    if (count > 0) {
        console.log("500.000 - " + count + " tờ");
    }
    count = 0;
    while (money >= 200000) {
        money -= 200000;
        count++;
    }
    if (count > 0) {
        console.log("200.000 - " + count + " tờ");
    }
    count = 0;
    while (money >= 100000) {
        money -= 100000;
        count++;
    }
    if (count > 0) {
        console.log("100.000 - " + count + " tờ");
    }
    count = 0;
    while (money >= 50000) {
        money -= 50000;
        count++;
    }
    if (count > 0) {
        console.log("50.000 - " + count + " tờ");
    }
    count = 0;
    while (money >= 20000) {
        money -= 20000;
        count++;
    }
    if (count > 0) {
        console.log("20.000 - " + count + " tờ");
    }
    count = 0;
    while (money >= 10000) {
        money -= 10000;
        count++;
    }
    if (count > 0) {
        console.log("10.000 - " + count + " tờ");
    }
    count = 0;
    while (money >= 5000) {
        money -= 5000;
        count++;
    }
    if (count > 0) {
        console.log("5.000 - " + count + " tờ");
    }
    count = 0;
    while (money >= 2000) {
        money -= 2000;
        count++;
    }
    if (count > 0) {
        console.log("2.000 - " + count + " tờ");
    }
    count = 0;
    while (money >= 1000) {
        money -= 1000;
        count++;
    }
    if (count > 0) {
        console.log("1.000 - " + count + " tờ");
    }
}