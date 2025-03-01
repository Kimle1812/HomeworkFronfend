let math=prompt("Mời bạn nhập điểm Toán");
let literature=prompt("Mời bạn nhập điểm Ngữ Văn");
let english=prompt("Mời bạn nhập điểm Tiếng Anh");
let point=(Number(math)+Number(literature)+Number(english))/3;
if(point>=8){
    console.log("Bạn xếp học lực giỏi");
}else if(point>=6.5){
    console.log("Bạn xếp học lực khá");
}else if(point>=5.0){
    console.log("Bạn xếp học lực trung bình");
}else{
    console.log("Bạn xếp học lực yếu");
}
