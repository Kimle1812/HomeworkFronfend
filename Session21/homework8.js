let result=[];
let number;
for(let i=100;i<1000;i++){
    number = i.toString();
    if(Math.pow(number.charAt(0),3)+Math.pow(number.charAt(1),3)+Math.pow(number.charAt(2),3)==i){
        result.push(i);
    }
}
console.log("Số Armstrong có 3 chữ số là: ", result)