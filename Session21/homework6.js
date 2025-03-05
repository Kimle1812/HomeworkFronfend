let number=+prompt("Mời bạn nhập số nguyên bất kỳ");
let result=[];
let result_one=[];
if(Number.isInteger(number)){
    for(let i=1; i<=Math.abs(number);i++){
        if(number % i ==0  && i != 0){
            result.push(i);
            result_one.push(-i);
        }
    }
    console.log("Các ước của số đã nhập là: " + result + " và "+result_one)
}else{
    console.log("Số bạn nhập không phải số nguyên")
}