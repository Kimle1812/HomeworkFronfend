// a
console.log("a.");
for (let i = 10; i >= 1; i--) {
    let icon = "***********";
    console.log(icon.substring(0, i));
}
console.log("--------------------------------------------------");

// b
console.log("b.");
for (let i = 1; i <= 10; i++) {
    let icon = "***********";
    console.log(icon.substring(0, i));
}
console.log("--------------------------------------------------");

// c
console.log("c.");
for (let i = 1; i <= 10; i++) {
    let icon = "***********";
    for (let j = 1; j <= 10 - i; j++) {
        icon = " " + icon;
    }
    console.log(icon.substring(0, 10));
}
console.log("--------------------------------------------------");

// d
console.log("d.");
for (let i = 10; i >= 1; i--) {
    let icon = "***********";
    for (let j = 10 - i; j >= 1; j--) {
        icon = " " + icon;
    }
    console.log(icon.substring(0, 10));
}
console.log("--------------------------------------------------");
