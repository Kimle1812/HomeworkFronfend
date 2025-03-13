let choice;
let arr=[];
do{
    choice=+prompt(
        `               MENU
        1. Nhập danh sách sinh viên
        2. Hiển thị danh sách sinh viên.
        3. Tìm sinh viên theo tên
        4. Xóa sinh viên khỏi danh sách.
        5. Thoát.
        Lựa chọn của bạn là:
        `)
    switch(choice){
        case 1:
            //Nhập danh sách sinh viên
            addStudent();
            break;
        case 2:
            //Hiển thị danh sách sinh viên.
            console.log(arr);
            break;
        case 3:
            //Tìm sinh viên theo tên
            searchStudent(arr);
            break;
        case 4:
            //Xóa sinh viên khỏi danh sách.
            deleteStudent(arr);
            break;
        case 5:
            //Thoát chương trình
            console.log("Cảm ơn bạn đã sử dụng chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}while(choice!=5);

function addStudent (){
    do{
        number = +prompt("Nhập số lượng sinh viên bạn muốn thêm: ");
        if (!Number.isInteger(number) || number < 0) {
            alert("Vui lòng nhập một số nguyên.");
        }
    }while(!Number.isInteger(number) || number < 0)
    for (let i = 0; i < number; i++) {
        arr.push(prompt("Sinh viên thứ "+(i+1)+": "));
    }
    console.log(arr);
}

function searchStudent(arr){
    let count=0;
    let searchArr=[]
    let nameSearch=prompt("Mời bạn nhập tên sinh viên muốn tìm kiếm")
    for(let i=0;i<arr.length;i++){
        if(arr[i].includes(nameSearch)){
            searchArr.push(arr[i])
            count++;
        }
    }
    count==0 ? console.log("Sinh viên không có tên trong danh sách") : console.log(searchArr);
}

function deleteStudent(arr){
    let count=0;
    let nameDelete=prompt("Mời bạn nhập tên sinh viên muốn tìm kiếm")
    for(let i=0;i<arr.length;i++){
        if(arr[i].includes(nameDelete)){
            arr.splice(i,1);
            count++;
            break;
        }
    }
    count==0 ? console.log("Sinh viên không có tên trong danh sách") : console.log("Đã xóa sinh viên bạn muốn");
    console.log(arr);
}