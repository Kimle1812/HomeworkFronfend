let radius = Number(prompt("Nhập bán kính đáy hình trụ: "));
let height = Number(prompt("Nhập chiều cao của hình trụ: "));
let surroundingArea = 2*3.14*radius*height;
let fullArea = 2*3.14*radius*height + 2*3.14*radius**2;
let volume = 3.14*radius**2*height;
let bottomCircumference = 2*3.14*radius;
alert("Diện tích xung quanh: "+surroundingArea);
alert("Diện tích toàn phần: "+fullArea);
alert("Thể tích: "+volume);
alert("Chu vi đáy: "+bottomCircumference);