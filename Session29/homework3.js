let menus={
    
};
let choice;
do{
    choice=+prompt(`
        MENU MÓN ĂN
        1. Thêm món ăn vào danh mục.
        2. Xóa món ăn theo tên khỏi danh mục.
        3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
        4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
        5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
        6. Thoát
        `)
    switch (choice) {
        case 1://Thêm món ăn vào danh mục.
            addFood(menus);
            break;
        case 2://Xóa món ăn theo tên khỏi danh mục.
            deleteFood();
            break;
        case 3://Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
            updateFood();
            break;
        case 4://Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
            displayFood(menus);
            break;
        case 5://Tìm kiếm món ăn theo tên trong toàn bộ menu.
            searchFood();
            break;
        case 6://Thoát
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }
}while(choice!=6);

//Thêm món ăn vào danh mục.
function addFood(menus) {
    let number;
    do {
        number = +prompt("Nhập số lượng món ăn bạn muốn thêm vào mảng: ");
    } while (!Number.isInteger(number) || number < 0);
    for (let i = 0; i < number; i++) {
        let name = prompt(`Nhập tên món ăn thứ ${i + 1}:`);
        let salary;
        do {
            salary = +prompt("Nhập giá cả món ăn (số nguyên dương):");
        } while (!Number.isInteger(salary) || salary <= 0);

        let description = prompt("Nhập mô tả món ăn:");
        let menu = {
            name: name,
            salary: salary,
            description: description
        };
        menus.push(menu);
    }
    console.table(menus);
}


//Xóa món ăn theo tên khỏi danh mục.
function deleteFood(menus) {
    let searchName = prompt("Mời bạn nhập món ăn muốn xóa:");
    let findIndex = menus.findIndex(item => item.name === searchName);
    if (findIndex != -1) {
        let confirmDelete = confirm("Bạn có muốn xóa hay không?");
        if (confirmDelete) {
            menus.splice(findIndex, 1);
            console.log("Xóa món ăn thành công!");
        }
        console.table(menus);
    } else {
        console.log("Không tìm thấy món ăn có tên là: ", searchName);
    }

}


//Cập nhật thông tin theo tên của món ăn(tên, giá, mô tả).
function updateFood(){
    let searchName = prompt("Mời bạn nhập món ăn muốn cập nhật:");
    let findIndex = menus.findIndex(item => item.name === searchName);
    if (findIndex != -1) {
        let updateName=prompt("Mời bạn nhập tên món ăn mới:");
        let updateSalary=+prompt("Mời bạn nhập giá cả món ăn mới:");
        let updateDescription=prompt("Mời bạn nhập mô tả món ăn mới:");
        if(updateDescription.length==0 || updateSalary==0 || updateName==0){
            console.log("Bạn không được để trống thông tin")
        }else{
            menus[findIndex].name=updateName;
            menus[findIndex].salary=updateSalary;
            menus[findIndex].description=updateDescription;
            console.log("Cập nhật món ăn thành công!");
            console.table(menus);
        }
    } else {
        console.log("Không tìm thấy món ăn có tên là: ", searchName);
    }
}

//Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
function displayFood(menus){
    if (menus.length === 0) {
        console.log("Danh sách món ăn trống.");
        return;
    }
    console.table(menus);
}

//Tìm kiếm món ăn theo tên trong toàn bộ menu.
function searchFood(){
    let searchName = prompt("Mời bạn nhập món ăn muốn tìm:");
    let findIndex = menus.findIndex(item => item.name === searchName);
    if (findIndex != -1) {
        console.table(menus[findIndex]);
    } else {
        console.log("Không tìm thấy món ăn có tên là: ", searchName);
    }
}
