function resetWord(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase(); 
    }
    str = arr.join(" ");
    console.log(str);
    return;
}
let str = prompt("Mời bạn nhập từ vào để kiểm tra: ");
resetWord(str);