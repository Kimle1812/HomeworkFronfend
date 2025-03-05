let number_a=+prompt("Mời bạn nhập số a");
let number_b=+prompt("Mời bạn nhập số b");
let number_c=+prompt("Mời bạn nhập số c");
let delta=number_b*number_b - 4*number_a*number_c;
let x,x_one,x_two;
if(delta < 0){
    console.log("Phương trình vô nghiệm");
}else if(delta == 0){
    x=-number_b/(2*number_a);
    console.log("Phương trình có nghiệm kép x = ",x);
}else{
    x_one=(-number_b+Math.sqrt(delta))/(2*number_a);
    x_two=(-number_b-Math.sqrt(delta))/(2*number_a);
    console.log("Phương trình có 2 nghiệm x = "+x_one+" và x = "+x_two);
}