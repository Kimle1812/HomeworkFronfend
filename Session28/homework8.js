let choice;
let employees = [];

do {
    choice = +prompt(
        `       PHẦN MỀM QUẢN LÝ NHÂN VIÊN
        1. Thêm nhân viên mới
        2. Xóa nhân viên theo id
        3. Cập nhật mức lương của nhân viên theo id
        4. Tìm kiếm nhân viên theo tên
        5. Thoát
        `
    );
    switch (choice) {
        case 1:
            addNewEmployee();
            break;
        case 2:
            deleteEmployeeById();
            break;
        case 3:
            updateEmployeeSalaryById();
            break;
        case 4:
            searchEmployeeByName();
            break;
        case 5:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại");
            break;
    }
} while (choice != 5);

function addNewEmployee() {
    let number = +prompt("Số lượng nhân viên bạn muốn thêm là ");
    if (!Number.isInteger(number) || number <= 0) {
        console.log("Số lượng bạn nhập không hợp lệ");
        return;
    }
    for (let i = 0; i < number; i++) {
        let id = prompt("Nhập ID nhân viên: ");
        let name = prompt("Nhập tên nhân viên: ");
        let position = prompt("Nhập chức vụ của nhân viên: ");
        let salary = +prompt("Nhập mức lương của nhân viên: ");
        if (!Number.isInteger(salary) || salary <= 0) {
            console.log("Mức lương không hợp lệ, vui lòng thử lại");
            i--;
            continue;
        }
        employees.push({ 
            id, 
            name, 
            position, 
            salary 
        });
    }
    console.log("Danh sách nhân viên hiện tại: ", employees);
}

function deleteEmployeeById() {
    let id = prompt("Nhập ID nhân viên cần xóa: ");
    let employeeIndex = employees.findIndex(emp => emp.id === id);
    if (employeeIndex === -1) {
        console.log("Không tìm thấy nhân viên với ID này.");
        return;
    }
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhân viên này?");
    if (confirmDelete) {
        employees.splice(employeeIndex, 1);
        console.log("Xóa nhân viên thành công.");
    }
    console.log("Danh sách nhân viên hiện tại: ", employees);
}

function updateEmployeeSalaryById() {
    let id = prompt("Nhập ID nhân viên cần cập nhật lương: ");
    let employee = employees.find(emp => emp.id === id);
    if (!employee) {
        console.log("Không tìm thấy nhân viên với ID này.");
        return;
    }
    let newSalary = +prompt("Nhập mức lương mới: ");
    if (isNaN(newSalary) || newSalary <= 0) {
        console.log("Mức lương không hợp lệ, vui lòng thử lại.");
        return;
    }
    employee.salary = newSalary;
    console.log("Cập nhật lương thành công.");
    console.log("Danh sách nhân viên hiện tại: ", employees);
}

function searchEmployeeByName() {
    let name = prompt("Nhập tên nhân viên cần tìm: ");
    let foundEmployees = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    if (foundEmployees.length === 0) {
        console.log("Không tìm thấy nhân viên nào.");
    } else {
        console.log("Danh sách nhân viên tìm thấy: ", foundEmployees);
    }
}
