let radius = Number(prompt("Nhập bán kính hình cầu: "));
let volume = (4*3.14*radius**3)/3;
let area = 4*3.14*radius**2;
let circumference = 2*3.14*radius;
alert("Thể tích: "+volume.toFixed(2));
alert("Diện tích mặt cầu: "+area);
alert("Chu vi mặt cầu: "+circumference);