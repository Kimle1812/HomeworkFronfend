let employees = [];
const pageSize = 3; 
let currentPage = 1;
let employeesInf = (localStorage.getItem('employeesInf') || '').split(',');
function renderTable() {
    const tableBody = document.getElementById("employeeTable");
    const pagination = document.getElementById("pagination");
    if (!tableBody || !pagination) return;

    const startIndex = (currentPage - 1) * pageSize;
    const currentEmployees = employees.slice(startIndex, startIndex + pageSize);

    tableBody.innerHTML = currentEmployees.map((employee, index) => `
        <tr>
            <td>${startIndex + index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        </tr>
    `).join("");

    const totalPages = Math.ceil(employees.length / pageSize);
    pagination.innerHTML = `
        <button class="pre-btn" ${currentPage === 1 ? "disabled" : ""} onclick="changePage(currentPage - 1)">Previous</button>
        ${Array.from({ length: totalPages }, (_, i) => `
            <button class="pageNumber ${currentPage === i + 1 ? "active" : ""}" onclick="changePage(${i + 1})">${i + 1}</button>
        `).join("")}
        <button class="next-btn" ${currentPage === totalPages ? "disabled" : ""} onclick="changePage(currentPage + 1)">Next</button>
    `;
}


function addEmployee() {
    const name = document.getElementById("employeeNameInput").value.trim();
    const position = document.getElementById("employeePositionInput").value.trim();

    if (!name || !position) {
        alert("Vui lòng nhập đầy đủ tên và chức vụ!");
        return;
    }

    employees.push({ name, position });
    localStorage.setItem('employeesInf', employeesInf.join(','));
    document.getElementById("employeeNameInput").value = "";
    document.getElementById("employeePositionInput").value = "";
    currentPage = Math.ceil(employees.length / pageSize);
    renderTable();
}

function changePage(page) {
    currentPage = page;
    renderTable();
}

renderTable();