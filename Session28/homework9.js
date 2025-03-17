let choice;
let books = [];

do {
    choice = +prompt(
        `       PHẦN MỀM QUẢN LÝ THƯ VIỆN
        1. Thêm sách mới
        2. Hiển thị danh sách sách
        3. Tìm kiếm sách theo tiêu đề
        4. Cập nhật trạng thái mượn/trả sách theo ID sách
        5. Xóa sách theo ID sách
        6. Sắp xếp sách theo giá tăng dần
        7. Thoát
        `
    );
    switch (choice) {
        case 1:
            addNewBook();
            break;
        case 2:
            displayBooks();
            break;
        case 3:
            searchBookByTitle();
            break;
        case 4:
            updateBookStatus();
            break;
        case 5:
            deleteBookById();
            break;
        case 6:
            sortBooksByPrice();
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại");
            break;
    }
} while (choice != 7);

function addNewBook() {
    let number = +prompt("Số lượng sách bạn muốn thêm là ");
    if (!Number.isInteger(number) || number <= 0) {
        console.log("Số lượng bạn nhập không hợp lệ");
        return;
    }
    for (let i = 0; i < number; i++) {
        let id = +prompt("Nhập ID sách (số nguyên): ");
        let title = prompt("Nhập tên sách: ");
        let author = prompt("Nhập tên tác giả: ");
        let year = +prompt("Nhập năm xuất bản: ");
        let price = +prompt("Nhập giá sách: ");
        let isAvailable = confirm("Sách có sẵn để mượn? (OK: Có, Cancel: Không)");

        if (!Number.isInteger(id) || !Number.isInteger(year) || !Number.isInteger(price) || id <= 0 || year <= 0 || price <= 0) {
            console.log("Dữ liệu không hợp lệ, vui lòng thử lại");
            i--;
            continue;
        }

        books.push({ 
            id, 
            title, 
            author, 
            year, 
            price, 
            isAvailable 
        });
    }
    console.log("Danh sách sách hiện tại: ", books);
}

function displayBooks() {
    if (books.length === 0) {
        console.log("Danh sách sách trống.");
        return;
    }
    console.log("Danh sách sách hiện tại: ", books);
}

function searchBookByTitle() {
    let title = prompt("Nhập tiêu đề sách cần tìm: ");
    let foundBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (foundBooks.length === 0) {
        console.log("Không tìm thấy sách nào với tiêu đề này.");
    } else {
        console.log("Kết quả tìm kiếm: ", foundBooks);
    }
}

function updateBookStatus() {
    let id = +prompt("Nhập ID sách cần cập nhật trạng thái mượn/trả: ");
    let book = books.find(book => book.id === id);
    if (!book) {
        console.log("Không tìm thấy sách với ID này.");
        return;
    }
    book.isAvailable = !book.isAvailable;
    console.log("Cập nhật trạng thái mượn/trả thành công.");
    console.log("Trạng thái hiện tại: ", book);
}

function deleteBookById() {
    let id = +prompt("Nhập ID sách cần xóa: ");
    let bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
        console.log("Không tìm thấy sách với ID này.");
        return;
    }
    books.splice(bookIndex, 1);
    console.log("Xóa sách thành công.");
    console.log("Danh sách sách hiện tại: ", books);
}

function sortBooksByPrice() {
    books.sort((a, b) => a.price - b.price);
    console.log("Danh sách sách sau khi sắp xếp theo giá tăng dần: ", books);
}