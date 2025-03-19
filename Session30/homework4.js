let courses = [];
let users = [];   
let choice = 0;
do {
    choice = +prompt(`
        1. Quản lý khóa học
        2. Quản lý người dùng
        3. Thoát chương trình
    `);
    switch (choice) {
        case 1:
            manageCourses();
            break;
        case 2:
            manageUsers();
            break;
        default:
            break;
    }
} while (choice != 3);
function manageCourses() {
    let choice = +prompt(`
        1. Thêm khóa học
        2. Tìm kiếm khóa học theo tên
        3. Xóa khóa học
        4. Quay lại
    `);
    switch (choice) {
        case 1:
            addCourse();
            break;
        case 2:
            searchCourse();
            break;
        case 3:
            removeCourse();
            break;
        case 4:
            return;
        default:
            break;
    }
}
function addCourse() {
    let id = Math.floor(Math.random() * 9999 + new Date().getMilliseconds());
    let name = prompt("Nhập tên khóa học: ");
    let instructor = prompt("Nhập tên giáo viên dạy khóa học: ");
    let newCourse = {
        id: id,
        name: name,
        instructor: instructor,
        students: []  
    };
    courses.push(newCourse);
    console.log("Khóa học đã được thêm vào hệ thống:", newCourse);
}

function searchCourse() {
    let name = prompt("Nhập tên khóa học cần tìm: ");
    let foundCourses = courses.filter(course => course.name.toLowerCase().includes(name.toLowerCase()));
    if (foundCourses.length > 0) {
        console.log("Khóa học tìm thấy:");
        foundCourses.forEach(course => {
            console.log(`
                ID: ${course.id}
                Name: ${course.name}
                Instructor: ${course.instructor}
                Students: ${course.students.length}
            `);
        });
    } else {
        console.log("Không tìm thấy khóa học với tên này.");
    }
}
function removeCourse() {
    let id = +prompt("Nhập ID của khóa học cần xóa: ");
    let index = courses.findIndex(course => course.id == id);
    if (index != -1) {
        users.forEach(user => {
            user.registeredCourses = user.registeredCourses.filter(courseId => courseId !== id);
        });
        courses.splice(index, 1);
        console.log("Khóa học đã được xóa khỏi hệ thống.");
    } else {
        console.log("Không tìm thấy khóa học với ID này.");
    }
}
function manageUsers() {
    let choice = +prompt(`
        1. Thêm người dùng mới
        2. Đăng ký khóa học
        3. Hủy đăng ký khóa học
        4. Hiển thị danh sách khóa học của một người dùng
        5. Quay lại
    `);
    switch (choice) {
        case 1:
            addUser();
            break;
        case 2:
            registerCourse();
            break;
        case 3:
            unregisterCourse();
            break;
        case 4:
            showUserCourses();
            break;
        case 5:
            return;
        default:
            break;
    }
}
function addUser() {
    let id = courses.length == 0 ?  1 :  courses[courses.length-1].id + 1;
    let name = prompt("Nhập tên người dùng: ");
    let newUser = {
        id: id,
        name: name,
        registeredCourses: []
    };
    users.push(newUser);
    console.log("Người dùng đã được thêm vào hệ thống:", newUser);
}
function registerCourse() {
    let userId = +prompt("Nhập ID người dùng: ");
    let courseId = +prompt("Nhập ID khóa học bạn muốn đăng ký: ");
    let user = users.find(user => user.id === userId);
    let course = courses.find(course => course.id === courseId);
    if (user && course) {
        if (!user.registeredCourses.includes(courseId)) {
            user.registeredCourses.push(courseId);
            course.students.push(userId);
            console.log(`Người dùng ${user.name} đã đăng ký khóa học ${course.name}.`);
        } else {
            console.log("Người dùng đã đăng ký khóa học này rồi.");
        }
    } else {
        console.log("Không tìm thấy người dùng hoặc khóa học.");
    }
}
function unregisterCourse() {
    let userId = +prompt("Nhập ID người dùng: ");
    let courseId = +prompt("Nhập ID khóa học bạn muốn hủy đăng ký: ");
    let user = users.find(user => user.id === userId);
    let course = courses.find(course => course.id === courseId);
    if (user && course) {
        if (user.registeredCourses.includes(courseId)) {
            user.registeredCourses = user.registeredCourses.filter(id => id !== courseId);
            course.students = course.students.filter(id => id !== userId);
            console.log(`Người dùng ${user.name} đã hủy đăng ký khóa học ${course.name}.`);
        } else {
            console.log("Người dùng chưa đăng ký khóa học này.");
        }
    } else {
        console.log("Không tìm thấy người dùng hoặc khóa học.");
    }
}
function showUserCourses() {
    let userId = +prompt("Nhập ID người dùng: ");
    let user = users.find(user => user.id === userId);
    if (user) {
        console.log(`Danh sách khóa học của người dùng ${user.name}:`);
        if (user.registeredCourses.length > 0) {
            user.registeredCourses.forEach(courseId => {
                let course = courses.find(c => c.id === courseId);
                console.log(`${course.name} (Giáo viên: ${course.instructor})`);
            });
        } else {
            console.log("Người dùng chưa đăng ký khóa học nào.");
        }
    } else {
        console.log("Không tìm thấy người dùng.");
    }
}
