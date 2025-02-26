let math=prompt("Mời bạn nhập điểm Toán");
let chemistry=prompt("Mời bạn nhập điểm Hoá Học");
let plysics=prompt("Mời bạn nhập điểm Vật Lý");
let calculations=(Number(math) + Number(chemistry) + Number(plysics))/3;
let result=calculations.toFixed(2);
document.write("Điểm trung bình môn của bạn là: ", result);