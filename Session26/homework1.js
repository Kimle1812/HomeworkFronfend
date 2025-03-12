filterNumber();
function filterNumber(){
    let arr=[];
    for (let i = 0; i < 10; i++) {
        let number=+prompt("Nhập phần tử thứ "+(i+1)+": ");
        if(!Number.isInteger(Number(number))){
            console.log("Dữ liệu không hợp lệ")
            
        }else{
            arr.push(number)
        }
    }
    let newArr=arr.filter((item)=>{
        return item >=10;
    })
    newArr.length==0 ? console.log("Mảng không có phần tử nào") : console.log(newArr) 
    return newArr;
}