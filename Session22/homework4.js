let number=prompt("Mời bạn nhập dãy số bất kỳ");
if(!isNaN(Number(number))){
    let numbers=number.split('');
    let max=numbers[0];
    console.log(numbers)
    for(let i=1;i<numbers.length;i++){
        if(max<numbers[i]){
            max=numbers[i];
        }
    }
    console.log(`${max} là số lớn nhất trong dãy số`)
}else{
    console.log("Dãy số không hợp lệ")
}