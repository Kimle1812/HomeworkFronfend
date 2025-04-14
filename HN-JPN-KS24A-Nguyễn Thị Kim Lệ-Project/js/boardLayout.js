let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
let boardId = localStorage.getItem("currentBoardId") || null;
//Hàm hiển thị Your Workspace
function displayWorkspaceBoards(users) {
    let boardList = document.getElementById('list-board');
    boardList.innerHTML = '';
    if (!users || users.length === 0) {
        boardList.innerHTML = "<p>Không có dữ liệu nào!</p>";
        return;
    }
    let boardId = localStorage.getItem("currentBoardId");
    for (let userIndex = 0; userIndex < users.length; userIndex++) {
        let user = users[userIndex];
        if (user.boards && user.boards.length > 0) {
            for (let boardIndex = 0; boardIndex < user.boards.length; boardIndex++) {
                let board = user.boards[boardIndex];
                boardList.innerHTML += `
                    <li class="board-item">
                        <img src="${board.backdrop}" alt="" width="24px" height="24px">
                        <span>${board.title}</span>
                    </li>
                `;
                if (board.id == boardId) {
                    document.getElementsByClassName("board-item")[boardIndex].classList.add("addBackgroundBoard");
                    document.getElementsByClassName('nameList')[0].innerHTML= board.title;
                    if (board._is_starred == true) { // Kiểm tra nếu board được gắn sao
                        document.getElementsByClassName('header-image')[0].src  = "/assets/icons/icon-star.jpg";
                    }
                }
                
            }

        }
    }

}
displayWorkspaceBoards(users);
//Hàm hiển thị sự kiện
function displayEvents(users) {
    let eventList = document.getElementById('right-bottom');
    eventList.innerHTML = '';
    if (!users || users.length === 0) {
        eventList.innerHTML = "<p>Không có dữ liệu nào!</p>";
        return;
    }
    let boardId = localStorage.getItem("currentBoardId");
    
    for (let userIndex = 0; userIndex < users.length; userIndex++) {
        let user = users[userIndex];
        if (user.boards && user.boards.length > 0) {
            for (let boardIndex = 0; boardIndex < user.boards.length; boardIndex++) {
                let board = user.boards[boardIndex];
                if(board.id == boardId){
                    for(let eventIndex = 0; eventIndex < board.lists.length; eventIndex++){
                        let event = board.lists[eventIndex];
                        eventList.innerHTML += `
                            <div class="list-item">
                                <div class="content-one" >
                                    <div class="header">
                                        <span>${event.title}</span>
                                        <div class="header-icon">
                                            <img src="/assets/icons/Button.png" alt="" width="32px" height="32px" id="${event.id}" onclick="showEditList(id)">
                                            <img src="/assets/icons/Button menu.png" alt="" width="32px" height="32px">
                                        </div>
                                    </div>
                                    <div class="center">
                                        <ul id="list-task">
                                        </ul>
                                        <div class="final">
                                            <div>
                                                <img src="/assets/icons/Frame.png" alt="">
                                                <span id="${event.id}"onclick="showAddCard(id)">Add a card</span>
                                            </div>
                                            <div id="${event.id}" onclick="showDeleteList(id)"><img src="/assets/icons/Frame (3).png" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="addCard">
                                    <input type="text" placeholder="Enter a title or paste a link" class="addTask-input"><br>
                                    <div class="button-addCard">
                                        <button onclick="addTask(users)">Add card</button>
                                        <img src="/assets/icons/SVG.png" alt="" width="24px" height="24px" onclick="hideAddCard()">
                                    </div>
                                </div>
                                <div class="editList">
                                    <input type="text" placeholder="Enter New List" class="editList-input"><br>
                                    <div class="button-editList">
                                        <button onclick="editList(users)">Add card</button>
                                        <img src="/assets/icons/SVG.png" alt="" width="24px" height="24px" onclick="hideEditList()">
                                    </div>
                                </div>
                            </div>
                        `;
    
                    }
                }
            
               
            }

        }
    }
}
displayEvents(users);
//Hàm hiển thị các task trong sự kiện
function displayTask(users) {
    let taskList = document.getElementById('list-task');
    taskList.innerHTML = '';
    if (!users || users.length === 0) {
        taskList.innerHTML = "<p>Không có dữ liệu nào!</p>";
        return;
    }
    let boardId = localStorage.getItem("currentBoardId");
    for (let userIndex = 0; userIndex < users.length; userIndex++) {
        let user = users[userIndex];
        if (user.boards && user.boards.length > 0) {
            for (let boardIndex = 0; boardIndex < user.boards.length; boardIndex++) {
                let board = user.boards[boardIndex];
                if(board.id == boardId){
                    for(let eventIndex = 0; eventIndex < board.lists.length; eventIndex++){
                        let event = board.lists[eventIndex];
                        for(let taskIndex = 0; taskIndex < event.tasks.length; taskIndex++){
                            let task = event.tasks[taskIndex];
                            taskList.innerHTML += `
                                <li >
                                    <div >
                                        <span>${task.title}</span>
                                        <button id="${task.id}" onclick="showScript(id)" class="button-edit">Edit</button>
                                        <button id="${task.id}" id="${event.id}" onclick="showDeleteTask(id,id)"class="button-delete">Delete</button>
                                    </div>
                                
                                </li>
                            `;
                        }
                    }
                }
            }
        }
    }
}
displayTask(users);
//Hàm thêm sự kiện
function addList(users) {
    let newList = document.getElementsByClassName("addList-input")[0].value;
    if (!newList){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let newLists = {
        id: Date.now(),
        title: newList,
        created_at: new Date().toISOString(),
        tasks: []
    };
    let indexUser =users.findIndex((e) => e.id == currentUser.id);
    let indexBoard = users[indexUser].boards.findIndex((e) => e.id == localStorage.getItem("currentBoardId"));
    users[indexUser].boards[indexBoard].lists.push(newLists);
    currentUser.boards[indexBoard].lists.push(newLists);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    displayEvents(users);
    displayTask(users);
    hideAddCard();

}
//Hàm thêm các task sự kiện
function addTask(users) {
    let newTask = document.getElementsByClassName("addTask-input")[0].value;
    if (!newTask){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let newTasks = {
        id: Date.now(),
        title: newTask,
        description: "Ghi chú công việc",
        status: "pending",
        dueDate: new Date().toISOString(),
        created_at: new Date().toISOString(),
        tag:[]
    };

    let indexUser =users.findIndex((e) => e.id == currentUser.id);
    let indexBoard = users[indexUser].boards.findIndex((e) => e.id == localStorage.getItem("currentBoardId"));
    let indexList = users[indexUser].boards[indexBoard].lists.findIndex((e) => e.id == localStorage.getItem("currentEventId"));
    users[indexUser].boards[indexBoard].lists[indexList].tasks.push(newTasks);
    currentUser.boards[indexBoard].lists[indexList].tasks.push(newTasks);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    displayEvents(users);
    displayTask(users);
    hideAddCard();
}
//Ham xóa task
function deleteTask(users) {
    let listId = localStorage.getItem("currentEventId");
    let taskId = localStorage.getItem("currentTaskId");
    let indexUser = users.findIndex((e) => e.id == currentUser.id);
    let indexBoard = users[indexUser].boards.findIndex((e) => e.id == localStorage.getItem("currentBoardId"));
    let indexList = users[indexUser].boards[indexBoard].lists.findIndex((e) => e.id == listId);
    let indexTask = users[indexUser].boards[indexBoard].lists[indexList].tasks.findIndex((e) => e.id == taskId);
    users[indexUser].boards[indexBoard].lists[indexList].tasks.splice(indexTask, 1);
    currentUser.boards[indexBoard].lists[indexList].tasks.splice(indexTask, 1);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    displayEvents(users);
    displayTask(users);
    hideDetailModal();
}
//Ham xoa list
function deleteList(users) {
    let listId = localStorage.getItem("currentEventId");
    let indexUser = users.findIndex((e) => e.id == currentUser.id);
    let indexBoard = users[indexUser].boards.findIndex((e) => e.id == localStorage.getItem("currentBoardId"));
    let indexList = users[indexUser].boards[indexBoard].lists.findIndex((e) => e.id == listId);
    users[indexUser].boards[indexBoard].lists.splice(indexList, 1);
    currentUser.boards[indexBoard].lists.splice(indexList, 1);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    displayEvents(users);
    hideDetailModal();
}
//Hàm sửa list
function editList(users){
    let newList = document.getElementsByClassName("editList-input")[0].value;
    if (!newList){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let indexUser =users.findIndex((e) => e.id == currentUser.id);
    let indexBoard = users[indexUser].boards.findIndex((e) => e.id == localStorage.getItem("currentBoardId"));
    let indexList = users[indexUser].boards[indexBoard].lists.findIndex((e) => e.id == localStorage.getItem("currentEventId"));
    users[indexUser].boards[indexBoard].lists[indexList].title = newList;
    currentUser.boards[indexBoard].lists[indexList].title = newList;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    displayWorkspaceBoards(users);
    displayEvents(users);
    displayTask(users);
    hideEditList();
}
//Hàm sửa task
function editTask(users){
    let newTaskTitle = document.getElementsByClassName("detailHeader-input")[0].value;
    if (!newTaskTitle){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let newTaskDescription = document.getElementById("detailContent-input").value;
    if (!newTaskTitle){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let indexUser = users.findIndex((e) => e.id == currentUser.id);
    let indexBoard = users[indexUser].boards.findIndex((e) => e.id == localStorage.getItem("currentBoardId"));
    let indexList = users[indexUser].boards[indexBoard].lists.findIndex((e) => e.id == localStorage.getItem("currentEventId"));
    let indexTask = users[indexUser].boards[indexBoard].lists[indexList].tasks.findIndex((e) => e.id == localStorage.getItem("currentTaskId"));
    users[indexUser].boards[indexBoard].lists[indexList].tasks[indexTask].title = newTaskTitle;
    users[indexUser].boards[indexBoard].lists[indexList].tasks[indexTask].description = newTaskDescription;
    currentUser.boards[indexBoard].lists[indexList].tasks[indexTask].title = newTaskTitle;
    currentUser.boards[indexBoard].lists[indexList].tasks[indexTask].description = newTaskDescription;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    displayWorkspaceBoards(users);
    displayEvents(users);
    displayTask(users);
    hide();
}
// JS phần chuyển đổi giữa các trang
function showFilter(){
    document.getElementsByClassName("filterDropdown")[0].style.display = "flex";
    document.getElementsByClassName("board-layout")[0].style.opacity = "0.2";
}

function showClose(){
    document.getElementsByClassName("board-layout")[0].style.opacity = "0.2";
    document.getElementsByClassName("closeBoard")[0].style.display = "flex";
}
function showScript(id) {
    localStorage.setItem("currentTaskId", id);
    let indexUser = users.findIndex((e) => e.id == currentUser.id);
    let indexBoard = users[indexUser].boards.findIndex((e) => e.id == localStorage.getItem("currentBoardId"));
    let indexList = users[indexUser].boards[indexBoard].lists.findIndex((e) => e.id == localStorage.getItem("currentEventId"));
    let indexTask = users[indexUser].boards[indexBoard].lists[indexList].tasks.findIndex((e) => e.id == id);
    if (indexTask !== -1) {
        document.getElementsByClassName("detailHeader-input")[0].value = users[indexUser].boards[indexBoard].lists[indexList].tasks[indexTask].title;
    }
    document.getElementsByClassName("board-layout")[0].style.opacity = "0.2";
    document.getElementsByClassName("detailModal-main")[0].style.display = "block";
}
function showAddCard(id) {
    localStorage.setItem("currentEventId", id);
    document.getElementsByClassName("addCard")[0].style.display = "block";
    document.getElementsByClassName("final")[0].style.display = "none";
}
function showAddList(id) {
    
    localStorage.setItem("currentEventId", id);
    document.getElementsByClassName("addList")[0].style.display = "block";
}
function hideEditList() {
    document.getElementsByClassName("editList")[0].style.display = "none";
}
function showEditList(id) {

    localStorage.setItem("currentEventId", id);
    document.getElementsByClassName("editList")[0].style.display = "block";
}
function hideAddCard() {
    document.getElementsByClassName("addList")[0].style.display = "none";
    document.getElementsByClassName("addCard")[0].style.display = "none";
    document.getElementsByClassName("final")[0].style.display = "flex";
    document.getElementById("final").style.display = "flex";
    document.getElementsByClassName("deleteList")[0] = "none";
}
function showMoveCard(){
    document.getElementsByClassName("detailModal-main")[0].style.opacity = "0.2";
    document.getElementsByClassName("detailModal-inProgress")[0].style.display = "block";
}
function showCreateLabels(){
    document.getElementsByClassName("detailModal-main")[0].style.opacity = "0.2";
    document.getElementsByClassName("detailModal-labels")[0].style.display = "block";
}
function showDates(){
    document.getElementsByClassName("detailModal-main")[0].style.opacity = "0.2";
    document.getElementsByClassName("detailModal-dates")[0].style.display = "block";
}
function showDeleteTask(id){
    localStorage.setItem("currentTaskId", id);
    document.getElementsByClassName("detailModal-main")[0].style.opacity = "0.2";
    document.getElementsByClassName("deleteTask")[0].style.display = "block";
}
function showDeleteList(id){
    localStorage.setItem("currentEventId", id);
    document.getElementsByClassName("detailModal-main")[0].style.opacity = "0.2";
    document.getElementsByClassName("deleteList")[0].style.display = "block";
}
function hide(){
    document.getElementsByClassName("filterDropdown")[0].style.display = "none";
    document.getElementsByClassName("board-layout")[0].style.opacity = "1";
    document.getElementsByClassName("closeBoard")[0].style.display = "none";
    document.getElementsByClassName("detailModal-main")[0].style.display = "none";
}
function hideDetailModal(){
    document.getElementsByClassName("detailModal-inProgress")[0].style.display = "none";
    document.getElementsByClassName("detailModal-main")[0].style.opacity = "1";
    document.getElementsByClassName("detailModal-labels")[0].style.display = "none";
    document.getElementsByClassName("detailModal-dates")[0].style.display = "none";
    document.getElementsByClassName("deleteTask")[0].style.display = "none";
    document.getElementsByClassName("deleteList")[0].style.display = "none";

}
