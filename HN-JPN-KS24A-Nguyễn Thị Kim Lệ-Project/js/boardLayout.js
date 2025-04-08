
// JS phần chuyển đổi giữa các trang
function showFilter(){
    document.getElementsByClassName("filterDropdown")[0].style.display = "flex";
    document.getElementsByClassName("board-layout")[0].style.opacity = "0.2";
}

function showClose(){
    document.getElementsByClassName("board-layout")[0].style.opacity = "0.2";
    document.getElementsByClassName("closeBoard")[0].style.display = "flex";
}
function showScript() {
    document.getElementsByClassName("board-layout")[0].style.opacity = "0.2";
    document.getElementsByClassName("detailModal-main")[0].style.display = "block";
}
function showAddCard() {
    document.getElementsByClassName("addCard")[0].style.display = "block";
    document.getElementsByClassName("final")[0].style.display = "none";
}
function showAddList() {
    document.getElementsByClassName("addList")[0].style.display = "block";
    document.getElementsByClassName("final")[2].style.display = "none";
}
function hideAddCard() {
    document.getElementsByClassName("addList")[0].style.display = "none";
    document.getElementsByClassName("addCard")[0].style.display = "none";
    document.getElementsByClassName("final")[0].style.display = "flex";
    document.getElementsByClassName("final")[2].style.display = "flex";
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
function showDelete(){
    document.getElementsByClassName("detailModal-main")[0].style.opacity = "0.2";
    document.getElementsByClassName("deleteBoard")[0].style.display = "block";
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
    document.getElementsByClassName("deleteBoard")[0].style.display = "none";
}
