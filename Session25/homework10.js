let products = [["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]];
let cart = [];

function displayProducts(products) {
    console.log("Danh sách sản phẩm:");
    products.forEach(product => {
        console.log(`${product[0]}: ${product[1]} cái - ${product[2]} VND`);
    });
}

function buyProduct(productName, products, cart) {
    let product = products.find(item => item[0] === productName);
    if (!product) {
        console.log("Sản phẩm không có trong cửa hàng.");
        return;
    }
    if (product[1] === 0) {
        console.log(`Sản phẩm ${productName} đã hết.`);
        return;
    }
    product[1]--;
    let cartProduct = cart.find(item => item[0] === productName);
    if (cartProduct) {
        cartProduct[1]++;
    } else {
        cart.push([product[0], 1, product[2]]);
    }
    console.log(`Đã thêm ${productName} vào giỏ hàng.`);
}

function checkout(cart) {
    let total = 0;
    console.log("Hóa đơn:");
    cart.forEach(item => {
        console.log(`${item[0]}: ${item[1]} cái - ${item[2]} VND`);
        total += item[1] * item[2];
    });
    console.log(`Tổng tiền: ${total} VND`);
}

let choice;
do {
    choice = prompt(
        `               MENU
        1. Xem danh sách sản phẩm
        2. Chọn sản phẩm để mua
        3. Thanh toán + in ra hóa đơn
        4. Thoát
        Lựa chọn của bạn 
        `);
    switch (parseInt(choice)) {
        case 1:
            displayProducts(products);
            break;
        case 2:
            let productName = prompt("Nhập tên sản phẩm muốn mua: ");
            buyProduct(productName, products, cart);
            break;
        case 3:
            checkout(cart);
            break;
        case 4:
            console.log("Cảm ơn bạn đã mua hàng");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice != 4);
