// File JS chính
//Cấu trúc dữ liệu mẫu
    let users = JSON.parse(localStorage.getItem("users")) || [
      {
        "id": 1,
        "username": "john_doe",
        "email": "john@example.com",
        "password": "hashed_password",
        "created_at": "2025-02-28T12:00:00Z",
        "boards": [
          {
            "id": 1,
            "title": "Dự án Website",
            "description": "Quản lý tiến độ dự án website",
            "backdrop": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/640px-Cat_August_2010-4.jpg",
            "_is_starred": true,
            "created_at": "2025-02-28T12:30:00Z",
            "lists": [
              {
                "id": 201,
                "title": "Việc cần làm",
                "created_at": "2025-02-28T13:00:00Z",
                "tasks": [
                  {
                    "id": 301,
                    "title": "Thiết kế giao diện",
                    "description": "Tạo wireframe cho trang chủ",
                    "status": "pending",
                    "due-date": "2025-03-05T23:59:59Z",
                    "tag": [
                      {
                        "id": 401,
                        "content": "Urgent",
                        "color": "#fff"
                      }
                    ],
                    "created_at": "2025-02-28T13:30:00Z"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
    console.log(users);
    let currentUser = JSON.parse(localStorage.getItem("currentUser")); // Giả sử người dùng đầu tiên là người dùng hiện tại

    
//Hàm hiển thị Your Workspace
    function displayWorkspaceBoards(users) {
        let boardList = document.getElementsByClassName('workspaceBoards')[0];
        boardList.innerHTML = '';
        if (!users || users.length === 0) {
            container.innerHTML = "<p>Không có dữ liệu nào!</p>";
            return;
        }
        for (let userIndex = 0; userIndex < users.length; userIndex++) {
            let user = users[userIndex];
            if (user.boards && user.boards.length > 0) {
                for (let boardIndex = 0; boardIndex < user.boards.length; boardIndex++) {
                    let board = user.boards[boardIndex];
                    boardList.innerHTML += `
                        <li>
                            <img src="${board.backdrop}" alt="No Image" width="270px" height="130px" class="image">
                            <div><p class="text-image">${board.title}</p></div>
                            <div class="button">
                                <button id=${board.id} class="edit-button">
                                    <img src="/assets/icons/Frame (5).png" alt="">
                                    <span>Edit this board</span>
                                </button>
                                <button id=${board.id} class="delete-button">Delete</button>
                            </div>
                        </li>
                    `;
                }
            }
        }
    }
    displayWorkspaceBoards(users);
// Hàm hiển thị Starred Boards
function displayStarredBoards(users) {
    let boardList = document.getElementsByClassName('starredBoards')[0];
    boardList.innerHTML = ''; // Xóa nội dung cũ
    for (let userIndex = 0; userIndex < users.length; userIndex++) {
        let user = users[userIndex];
        if (user.boards && user.boards.length > 0) {
            for (let boardIndex = 0; boardIndex < user.boards.length; boardIndex++) {
                let board = user.boards[boardIndex];
                if (board._is_starred == true) { // Kiểm tra nếu board được gắn sao
                    boardList.innerHTML += `
                        <li>
                            <img src="${board.backdrop}" alt="No Image" width="270px" height="130px" class="image">
                            <div><p class="text-image">${board.title}</p></div>
                        </li>
                    `;
                }
            }
        }
    }
}
    displayStarredBoards(users);
//Hàm thêm mới Board
function addNewBoard(users, currentUser){
    let boardTitle = document.getElementsByClassName("createTitle-input")[0].value;
    if (!boardTitle) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let newBoard = {
        id: Date.now(),
        title: boardTitle,
        description: "dự án",
        backdrop: "https://s3-alpha-sig.figma.com/img/0caf/31db/519b1e2549c3ed1cdce2d2279cf5ac0b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oryXOXJpHqJ~pspJ6bU49tVw7lx3HylkVnbH3jFAlFyHhqiuXuzGJjfSHAtNFQ6Xza7cv54Dcp~FoSivFxRYPxV1srYiATPv~8Mm20YiOFsLqV2JzLoeR8lTBMA4PQvEUFfpdsR60i1JVmLJz1trcKizojOLgvuaqU685z2thPJHfPXtkiGXxvpsGZl7U7nzVIix9IR1P0jw4yd-TJnqN4ivTNsJbAgLtjqsyRgsKo91saSwYi4hyxSfcKKRarQ0oz7DoaSuo6AGJz6~ghXQYMfHmh752eg351n3yK9ItWS7BS0ddDfibaa~3Xw2d6Aba5rkEuztD6rn-Vfe4XxGvg__",
        _is_starred: true,
        created_at: new Date().toISOString(),
        lists: []
    };
    let indexUser =users.findIndex((e) => e.id == currentUser.id);
    users[indexUser].boards.push(newBoard);
    currentUser.boards.push(newBoard);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    displayWorkspaceBoards(users);
    displayStarredBoards(users);
    hide();
}
//Hàm sửa Board
// function editBoard(users) {
//     let boardTitle = document.getElementsByClassName("text-image")[0];
//     console.log(boardTitle);
    
//     // Lấy dữ liệu mới từ các trường nhập liệu
//     let newTitle = document.getElementsByClassName("editTitle-input")[0].value.trim();
//     if (!newTitle) {
//         alert("Vui lòng nhập đầy đủ thông tin để sửa!");
//         return;
//     }

//     // Cập nhật thông tin Board
//     users.boards.title = newTitle;

//     // Lưu lại vào Local Storage
//     localStorage.setItem("users", JSON.stringify());

//     displayWorkspaceBoards(users);
//     displayStarredBoards(users);

//     alert("Sửa Board thành công!");
//     hide();
// }
// // workspaceBoards
let workspaceBoards = document.getElementById("workspaceBoards")
workspaceBoards.addEventListener("click", function(e) {
    if(e.target.classList.contains("edit-button")){
        let boardId = e.target.id;
        let boardDetail = currentUser.boards.find(board => board.id == boardId);
        showUpdate();
        console.log(boardDetail);
        
    let newTitle = document.getElementsByClassName("editTitle-input")[0].value.trim();
    if (!newTitle) {
        alert("Vui lòng nhập đầy đủ thông tin để sửa!");
        return;
    }
    // Cập nhật thông tin Board
    boardDetail.title = newTitle;
    console.log(boardDetail.title);
    // Lưu lại vào Local Storage
    localStorage.setItem("users", JSON.stringify(users));
    displayWorkspaceBoards(users);
    displayStarredBoards(users);
    alert("Sửa Board thành công!");
    }
    if(e.target.classList.contains("delete-button")){
        let boardId = e.target.id;
        let boardDetail = currentUser.boards.find(board => board.id == boardId);
        showDelete();
        console.log(boardDetail);
    }
    
})
// JS trang Create board

function showCreate(){
    document.getElementsByClassName("createBoard")[0].style.display = "flex";
    document.getElementsByClassName("container")[0].style.opacity = "0.2";
}
function showUpdate() {
    document.getElementsByClassName("updateBoard")[0].style.display = "flex";
    document.getElementsByClassName("container")[0].style.opacity = "0.2";
}
function showDelete(){
    document.getElementsByClassName("container")[0].style.opacity = "0.2";
    document.getElementsByClassName("deleteBoard")[0].style.display = "block";
}
function hide(){
    document.getElementsByClassName("createBoard")[0].style.display = "none";
    document.getElementsByClassName("container")[0].style.opacity = "1";
    document.getElementsByClassName("updateBoard")[0].style.display = "none";
    document.getElementsByClassName("deleteBoard")[0].style.display = "none";
}
function save() {
    
}