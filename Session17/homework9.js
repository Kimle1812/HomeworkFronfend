let number_a=+prompt("Mời bạn nhập giá trị a");
let number_b=+prompt("Mời bạn nhập giá trị a");
let number_c=+prompt("Mời bạn nhập giá trị a");
let detal=number_b*number_b - 4*number_a*number_c;
let solution_one=(-number_b + Math.sqrt(Number(detal)))/(2*number_a);
let solution_two=(-number_b - Math.sqrt(Number(detal)))/(2*number_a);
alert("Nghiệm thứ nhất là "+ Number(solution_one));
alert("Nghiệm thứ nhất là "+ Number(solution_two));