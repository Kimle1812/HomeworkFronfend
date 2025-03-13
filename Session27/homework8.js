let string=prompt("Mời bạn nhập chuỗi số nguyên");
maxNumber(string);
function maxNumber(str){
    if(Number.isInteger(Number(str))){
        let arr = str.split("");
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length; j++){
                if(arr[j] < arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        let newStr = arr.join("");
        console.log(`Chuỗi số lớn nhất là ${newStr} `)
    }else{
        console.log("Dữ liệu không hợp lệ");
    }
}
