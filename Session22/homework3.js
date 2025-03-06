let number=prompt("Mời bạn nhập dãy số bất kỳ");
let numbers=number.split('');
if(!isNaN(Number(number))){
    for(let i=numbers.length-1;i>=0;i--){
        console.log(numbers[i]);
    }
}else{
    console.log("Dãy không hợp lệ")
}


