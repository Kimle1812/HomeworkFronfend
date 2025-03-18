let carts=[];
let choice;
let books=[
    {
        id:1,
        name:"Thất tịch không mưa",
        price:60000,
        quantity:20,
        category:"Văn học",
    },
    {
        id:2,
        name:"Phong cảnh bên này",
        price:100000,
        quantity:30,
        category:"Văn học",
    },
    {
        id:3,
        name:"Thám tử lừng danh conan",
        price:40000,
        quantity:35,
        category:"Truyện tranh",
    },
    {
        id:4,
        name:"Doraemon",
        price:60000,
        quantity:40,
        category:"Truyện tranh",
    }
]
do{
    choice=+prompt(`
        MENU MUA SẮM
        1. Hiển thị danh sách sách theo thể loại
        2. Thêm sách mới vào kho
        3. Tìm kiếm sách theo tên hoặc id.
        4. Mua sách 
        5. Sắp xếp sách theo giá
        6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7. Hiển thị tổng số lượng sách trong kho.
        8. Thoát chương trình.
        `)
    switch (choice) {
        case 1://Hiển thị danh sách sách theo thể loại
            showBook();
            break;
        case 2://Thêm sách mới vào kho
            addBook(books);
            break;
        case 3://Tìm kiếm sách theo tên hoặc id
            searchBook();
            break;
        case 4://Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho)
            buyToBook();
            console.table(books);
            break;
        case 5://Sắp xếp sách theo giá:Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho)
            sortBook();
            break;
        case 6://Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
            calculateBook();
            break;
        case 7://Hiển thị tổng số lượng sách trong kho
            sumQuantityBook();
            break;
        case 8://Thoát
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }
}while(choice!=8);

//Hiển thị danh sách sách theo thể loại
function showBook(){
    let result;
    let choice =+prompt(`
        THỂ LOẠI
        1. Truyện tranh
        2. Văn học
        `);
    switch(choice){
        case 1:
            result=books.filter(item => item.category == "Truyện tranh");
            console.table(result);
            break;
        case 2:
            result=books.filter(item => item.category == "Văn học");
            console.table(result);
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }    
    
}
//Thêm sách mới vào kho
function addBook(books){
    let newId = books.length == 0 ?  1 :  books[books.length-1].id + 1;
    let name=prompt("Mời bạn nhập tên sách muốn thêm:");
    if(name.length==0){
        console.log("Tên không được để trống");
        return;
    }
    let price=prompt("Mời bạn nhập giá tiền:");
    if(!Number.isInteger(Number(price)) && price <=0){
        console.log("Giá tiền không hợp lệ");
        return;
    }
    let quantity=+prompt("Mời bạn nhập số lượng sách:");
    if(!Number.isInteger(Number(quantity)) && quantity <=0){
        console.log("Số lượng sách không hợp lệ");
        return;
    }
    let category=prompt("Mời bạn nhập thể loại sách:");
    if(category.length==0){
        console.log("Thể loại không được để trống");
        return;
    }
    books.push({
        id: newId,
        name: name,
        price: price,
        quantity: quantity,
        category: category
    })
    console.log("Thêm sách mới thành công");
    console.table(books);
}
//Tìm kiếm sách theo tên hoặc id
function searchBook(){
    let choice =+prompt(`
        DANH MỤC TÌM KIẾM
        1. Tìm kiếm theo tên
        2. Tìm kiếm theo ID
        `);
    switch(choice){
        case 1:
            searchByName();
            break;
        case 2:
            searchById();
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }    
}
//Tìm kiếm theo tên
function searchByName(){
    let searchName=prompt("Nhập tên sách cần tìm kiếm:");
    let filterName=books.filter(item=>item.name.toLowerCase().includes(searchName.toLowerCase()));
    filterName.length == 0 ? console.log("Không có sách trong cửa hàng") : console.table(filterName);
}
//Tìm kiếm theo Id
function searchById(){
    let searchId=+prompt("Nhập ID sách cần tìm kiếm:");
    let filterId=books.filter(item=>item.id==searchId);
    filterId == 0 ? console.log("Không có sách trong cửa hàng") : console.table(filterId);
}
//Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho)
function buyToBook(){
    let searchId=+prompt("Nhập ID sản phẩm cần mua:");
    let index=books.findIndex(item=>item.id==searchId);
    if(index!=-1){
        let quantity=+prompt("Mời bạn nhập số lượng sản phẩm:");
        if(quantity > books[index].quantity){
            console.log(`Sản phẩm không đủ, còn lại ${books[index].quantity}`)
        }else{
            books[index].quantity-=quantity;
            // Kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
            let indexCart = carts.findIndex(item=>item.id==searchId);
            if(indexCart==-1){
                //Sản phẩm chưa có trong giỏ hàng
                carts.push({
                    id:searchId,
                    name: books[index].name,
                    price:books[index].price,
                    quantity:quantity,
                    category:books[index].category
                })
                console.log("Thêm giỏ hàng thành công");
                console.table(carts);
            }else{
                //Sản phẩm đã có trong giỏ hàng
                carts[indexCart].quantity+=quantity;
                console.log("Thêm giỏ hàng thành công");
                console.table(carts);
            }
        }
    }else{
        console.log("Không có sẵn phẩm trong cửa hàng")
    }
}
//Sắp xếp sách theo giá
function sortBook(){
    let choice=prompt(`
        DANH MỤC SẮP XẾP
        a.Tăng dần
        b.Giảm dần
        `)
    switch (choice) {
        case "a"://Tăng dần
            books.sort((a, b) => a.price - b.price);
            console.log(books);
            break;
        case "b"://Giảm dần
            books.sort((a, b) => b.price - a.price);
            console.log(books);
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }
}
//Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
function calculateBook() {
    if (carts.length === 0) {
        console.log("Giỏ hàng của bạn đang trống.");
    } else {
        let sumQuantity = carts.reduce((sum, carts) => sum + carts.quantity,0);
        console.log(`Tổng số sách trong giỏ hàng là: ${sumQuantity}`);
        let total = carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log(`Tổng số tiền cần thanh toán: ${total.toLocaleString()} VNĐ`);
    }
}

//Hiển thị tổng số lượng sách trong kho
function sumQuantityBook(){
    let sumQuantity = books.reduce((sum, books) => sum + books.quantity,0);
    console.log(`Tổng số sách trong kho là: ${sumQuantity}`);
}