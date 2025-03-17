let choice;
let jobList = [];
do {
    choice = +prompt(
        `               PHẦN MỀM QUẢN LÝ CÔNG VIỆC
        1. Thêm công việc mới
        2. Hiển thị tất cả các công việc
        3. Cập nhật trạng thái công việc theo id
        4. Lọc các công việc theo trạng thái (Hoàn thành, Chưa hoàn thành)
        5. Sắp xếp các công việc theo trạng thái
        6. Thoát
        `);
    switch (choice) {
        case 1:
            addJob();
            break;
        case 2:
            displayJob();
            break;
        case 3:
            updateJob();
            break;
        case 4:
            filterJob();
            break;
        case 5:
            sortJob();
            break;
        case 6:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại");
            break;
    }
} while (choice !== 6);

function addJob() {
    let id = jobList.length > 0 ? jobList[jobList.length - 1].id + 1 : 1;
    let name = prompt("Nhập tên công việc: ");
    if (!name.trim()) {
        console.log("Tên công việc không hợp lệ");
        return;
    }
    let description = prompt("Nhập mô tả công việc: ");
    let startTime = prompt("Nhập thời gian bắt đầu (dd/mm/yyyy): ");
    let status = prompt("Nhập trạng thái công việc (Hoàn thành/Chưa hoàn thành): ");
    if (status !== "Hoàn thành" && status !== "Chưa hoàn thành") {
        console.log("Trạng thái công việc không hợp lệ");
        return;
    }
    jobList.push({ id, name, description, startTime, status });
    console.log("Thêm công việc thành công!");
}

function displayJob() {
    if (jobList.length === 0) {
        console.log("Danh sách công việc trống");
        return;
    }
    console.log(jobList);
}

function updateJob() {
    let jobId = +prompt("Nhập ID công việc bạn muốn cập nhật: ");
    if (!Number.isInteger(jobId) || jobId <= 0) {
        console.log("ID không hợp lệ, vui lòng nhập lại");
        return;
    }
    let job = jobList.find(job => job.id === jobId);
    if (!job) {
        console.log("Không tìm thấy công việc với ID này");
        return;
    }
    let newStatus = prompt("Nhập trạng thái mới (Hoàn thành/Chưa hoàn thành): ");
    if (newStatus !== "Hoàn thành" && newStatus !== "Chưa hoàn thành") {
        console.log("Trạng thái mới không hợp lệ");
        return;
    }
    job.status = newStatus;
    console.log("Cập nhật trạng thái thành công");
}

function filterJob() {
    let status = prompt("Nhập trạng thái để lọc (Hoàn thành/Chưa hoàn thành): ");
    if (status !== "Hoàn thành" && status !== "Chưa hoàn thành") {
        console.log("Trạng thái không hợp lệ");
        return;
    }
    let filteredJob = jobList.filter(job => job.status === status);
    if (filteredJob.length === 0) {
        console.log("Không có công việc nào thỏa mãn điều kiện");
        return;
    }
    console.log(filteredJob);
}

function sortJob() {
    jobList.sort((a, b) => {
        if (a.status > b.status) {
            return 1; 
        } else if (a.status < b.status) {
            return -1; 
        } else {
            return 0; 
        }
    });
    console.log("Danh sách công việc sau khi sắp xếp: ", jobList);
}