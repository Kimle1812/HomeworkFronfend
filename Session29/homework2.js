let choice;
let product = [];
do {
    choice = +prompt(
        `               PHẦN MỀM QUẢN LÝ SẢN PHẨM
        1. Thêm sản phẩm vào danh sách sản phẩm
        2. Hiển thị tất cả sản phẩm
        3. Hiển thị chi tiết sản phẩm theo id
        4. Cập nhật thông tin sản phẩm theo id
        5. Xóa sản phẩm theo id
        6. Lọc sản phẩm theo khoảng giá
        7. Thoát
        `);
    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            displayProduct();
            break;
        case 3:
            displayById(product);
            break;
        case 4:
            updateProduct(product);
            break;
        case 5:
            deleteProduct(product);
            break;
        case 6:
            filterProduct(product);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ vui lòng nhập lại");
            break;
    }
} while (choice != 7);

function addProduct() {
    let number = +prompt("Nhập số lượng sản phẩm bạn muốn thêm: ");
    if (!Number.isInteger(number) || number <= 0) {
        console.log("Số lượng bạn nhập không hợp lệ");
        return;
    }
    for (let i = 0; i < number; i++) {
        if (product.length == 0) {
            id = 1;
        } else {
            id = product[product.length - 1].id + 1;
        }
        let name = prompt("Nhập tên sản phẩm: ");
        if (name == " ") {
            console.log("Dữ liệu nhập không hợp lệ");
            return;
        }
        let price = +prompt("Nhập giá sản phẩm: ");
        if (!Number.isInteger(price) || price <= 0) {
            console.log("Giá tiền không hợp lệ, vui lòng nhập lại");
            i--;
            continue;
        }
        let category = prompt('Nhập danh mục sản phẩm: ');
        if (category == " ") {
            console.log("Dữ liệu nhập không hợp lệ");
            return;
        }
        let quantity = +prompt("Nhập số lượng sản phẩm thêm vào kho: ");
        if (!Number.isInteger(quantity) || quantity <= 0) {
            console.log("Số lượng sản phẩm không hợp lệ, vui lòng nhập lại");
            i--;
            continue;
        }
        product.push({id, name, price, category, quantity})
    }
    console.log("Thêm sản phẩm thành công, danh sách sản phẩm: ", product);
}

function displayProduct() {
    if (product.length == 0) {
        console.log("Danh sách trống");
        return;
    }
    console.log(product);
}

function displayById(product) {
    let findId = +prompt("Nhập ID sản phẩm bạn muốn hiển thị");
    if (!Number.isInteger(findId) || findId <= 0) {
        console.log("Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại");
        return;
    }
    let displayId = product.filter(product => product.id == findId);
    if (displayId.length == 0) {
        console.log("ID không tồn tại");
        return;
    }
    console.log(displayId);
}

function updateProduct(product) {
    let index = +prompt("Nhập ID sản phẩm bạn muốn hiển thị");
    if (!Number.isInteger(index) || index <= 0) {
        console.log("Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại");
        return;
    }
    let findId = product.filter(product => product.id == index);
    if (findId.length == 0) {
        console.log("ID không tồn tại");
        return;
    }
    let name = prompt("Nhập tên sản phẩm: ");
    if (name == " ") {
        console.log("Dữ liệu nhập không hợp lệ");
        return;
    }
    product.name = name;
    let price = +prompt("Nhập giá sản phẩm: ");
    if (!Number.isInteger(price) || price <= 0) {
        console.log("Giá tiền không hợp lệ, vui lòng nhập lại");
        return;
    }
    product.price = price;
    let category = prompt('Nhập danh mục sản phẩm: ');
    if (category == " ") {
        console.log("Dữ liệu nhập không hợp lệ");
        return;
    }
    product.category = category;
    let quantity = +prompt("Nhập số lượng sản phẩm thêm vào kho: ");
    if (!Number.isInteger(quantity) || quantity <= 0) {
        console.log("Số lượng sản phẩm không hợp lệ, vui lòng nhập lại");
        return;
    }
    product.quantity = quantity;
    console.log("Cập nhật thành công");
}

function deleteProduct(product) {
    let index = +prompt("Nhập ID sản phẩm bạn muốn hiển thị");
    if (!Number.isInteger(index) || index <= 0) {
        console.log("Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại");
        return;
    }
    let findId = product.filter(product => product.id == index);
    if (findId.length == 0) {
        console.log("ID không tồn tại");
        return;
    }
    product = product.filter(product => product.id != index);
    console.log("Xóa sản phẩm thành công.");
}

function filterProduct(product) {
    let min = +prompt("Nhập giá trị bé nhất muốn lọc");
    let max = +prompt("Nhập giá trị lớn nhất muốn lọc");
    if (!Number.isInteger(min) || !Number.isInteger(max) || min <= 0 || max <= min) {
        console.log("Không hợp lệ");
        return;
    }
    let listProduct = product.filter(product => product.price > min && product.price < max);
    if (listProduct == 0) {
        console.log("Không có giá trị nào thỏa mãn điều kiện");
    } else {
        console.log(listProduct);
    }
}