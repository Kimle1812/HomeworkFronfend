let products=[
    {
        id:1,
        name:"mèn mén",
        price:20000,
        quantity:20,
        category:"món ăn dân tộc Mông",
    },
    {
        id:2,
        name:"mứt",
        price:80000,
        quantity:21,
        category:"món ăn dân tộc Kinh",
    },
    {
        id:3,
        name:"cơm lam",
        price:40000,
        quantity:15,
        category:"món ăn dân tộc Mông",
    },
    {
        id:4,
        name:"bánh đậu xanh",
        price:60000,
        quantity:30,
        category:"món ăn dân tộc Kinh",
    }
]
let carts=[];
let choice;
do{
    choice=+prompt(`
        MENU MUA SẮM
        1. Hiển thị các sản phẩm theo tên danh mục
        2. Mua hàng
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá 
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát
        `)
    switch (choice) {
        case 1://Hiển thị các sản phẩm theo tên danh mục
            showProducts();
            break;
        case 2://Mua hàng
            buyToCart();
            break;
        case 3://Sắp xếp các sản phẩm trong cửa hàng theo giá
            sortCart();
            break;
        case 4://Tính số tiền thanh toán trong giỏ hàng.
            calculateTotal();
            break;
        case 5://Thoát
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }
}while(choice!=5);

//Hiển thị các sản phẩm theo tên danh mục
function showProducts(){
    let result;
    let choice =+prompt(`
        DANH MỤC MÓN ĂN
        1. Món ăn dân tộc Kinh
        2. Món ăn dân tộc Mông
        `);
    switch(choice){
        case 1:
            result=products.filter(item => item.category == "món ăn dân tộc Kinh");
            console.table(result);
            break;
        case 2:
            result=products.filter(item => item.category == "món ăn dân tộc Mông");
            console.table(result);
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }    
    
}

//Mua hàng
function buyToCart(){
    let productId=+prompt("Nhập ID sản phẩm cần mua:");
    let index=products.findIndex(item=>item.id==productId);
    if(index!=-1){
        let quantity=+prompt("Mời bạn nhập số lượng sản phẩm:");
        if(quantity > products[index].quantity){
            console.log(`Sản phẩm không đủ, còn lại ${products[index].quantity}`)
        }else{
            products[index].quantity-=quantity;
            // Kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
            let indexCart = carts.findIndex(item=>item.id==productId);
            if(indexCart==-1){
                //Sản phẩm chưa có trong giỏ hàng
                carts.push({
                    id:productId,
                    name: products[index].name,
                    price:products[index].price,
                    quantity:quantity,
                    category:products[index].category
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
//Sắp xếp các sản phẩm trong cửa hàng theo giá
function sortCart(){
    let choice=prompt(`
        DANH MỤC SẮP XẾP
        a.Tăng dần
        b.Giảm dần
        `)
    switch (choice) {
        case "a"://Tăng dần
            products.sort((a, b) => a.price - b.price);
            console.log(products);
            break;
        case "b"://Giảm dần
            products.sort((a, b) => b.price - a.price);
            console.log(products);
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }
}
//Tính số tiền thanh toán trong giỏ hàng
function calculateTotal() {
    if (carts.length === 0) {
        console.log("Giỏ hàng của bạn đang trống.");
    } else {
        let total = carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log(`Tổng số tiền cần thanh toán: ${total.toLocaleString()} VNĐ`);
    }
}