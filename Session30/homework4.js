let admins=[
    {
        id: 1,
        name:"Lập trình JavaScript",
        instructor: "Trần Minh Cường",
        students:[]
    },
    {
        id: 2,
        name:"Học HTML & CSS",
        instructor: "Nguyễn Xuân Bách",
        students:[]
    },
    {
        id: 3,
        name:"Phát triển Web Backend",
        instructor: "Trịnh Quốc Hai",
        students:[]
    },
];
let users = [
    {
        id: 1,
        name: "Nguyễn Văn D",
        registeredCourses: []
    },
    {
        id: 2,
        name: "Lê Thị E",
        registeredCourses: []
    },
    { 
        id: 3,
        name: "Trần Văn F",
        registeredCourses: []
    }
];
let choice;
do{
    choice=+prompt(`
        QUẢN LÝ
        1.Quản lý khóa học
        2.Quản lý người dùng
        3.Thoát
        `)
    switch(choice){
        case 1://Quản lý khóa học
            let choiceCourse;
            do{
                choiceCourse=prompt(`
                    QUẢN LÝ KHÓA HỌC
                    a. Thêm khóa học.
                    b. Tìm kiếm khóa học theo tên.
                    c. Xóa khóa học.
                    d. Thoát.
                    `)
            }while(choiceCourse!="d");
            break;
        case 2://Quản lý người dùng
            let choiceUser;
            do{
                choiceUser=prompt(`
                    QUẢN LÝ NGƯỜI DÙNG
                    a. Thêm người dùng mới.
                    b. Đăng ký khóa học.
                    c. Hủy đăng ký khóa học.
                    d. Hiển thị danh sách khóa học của một người dùng.
                    e. Thoát.
                    `)
            }while(choiceUser!="e");
            break;
        case 3://Thoát
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }
}while(choice != 3);