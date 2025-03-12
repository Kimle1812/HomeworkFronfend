function sum(a,b){
    if(Number.isInteger(Number(a)) && Number.isInteger(Number(b))){
        let sumNumber=Number(a)+Number(b);
        console.log(`Tổng của hai số là: ${sumNumber}`)
        return sumNumber;
    }
    console.log("Dữ liệu không hợp lệ")
}
sum(2,-7);