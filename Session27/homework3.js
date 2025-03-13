let result;
let rad, width, height;
let choice;
do {
    choice = +prompt(
        `           MENU
        1. Tính diện tích hình tròn
        2. Tính chu vi hình tròn
        3. Tính diện tích hình chữ nhật
        4. Tính chu vi hình chữ nhật
        5. Thoát
        Lựa chọn của bạn: 
        `);
    switch (choice) {
        case 1:
            cirArea();
            break;
        case 2:
            cirCircum();
            break;
        case 3:
            recArea();
            break;
        case 4:
            recCircum()
            break;  
        case 5:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại");
            break;
    }
} while (choice != 5);

function cirArea() {
    rad = +prompt("Mời bạn nhập bán kính hình tròn: ");
    if(!Number.isInteger(rad)){
        console.log("Số bạn nhập không thỏa mãn")
    }else{
        result = Math.PI*rad*rad;
        console.log(`Diện tích hình tròn là ${result.toFixed(2)}`);
    }
}

function cirCircum() {
    rad = +prompt("Mời bạn nhập bán kính hình tròn: ");
    if(!Number.isInteger(rad)){
        console.log("Số bạn nhập không thỏa mãn")
    }else{
        result = 2*Math.PI*rad;
        console.log(`Chu vi hình tròn là ${result.toFixed(2)}`);
    }
}
function recArea() {
    width = +prompt("Mời bạn nhập chiều rộng hình chữ nhật: ");
    height = +prompt("Mời bạn nhập chiều dài hình chữ nhật: ");
    if(!Number.isInteger(width) || !Number.isInteger(height)){
        console.log("Số bạn nhập không thỏa mãn")
    }else{
        result = width * height;
        console.log(`Diện tích hình chữ nhật là ${result}`);
    }
}


function recCircum() {
    width = +prompt("Mời bạn nhập chiều rộng hình chữ nhật: ");
    height = +prompt("Mời bạn nhập chiều dài hình chữ nhật: ");
    if(!Number.isInteger(width) || !Number.isInteger(height)){
        console.log("Số bạn nhập không thỏa mãn")
    }else{
        result = 2 * (width + height);
        console.log(`Chu vi hình chữ nhật là ${result}`);
    }
}
