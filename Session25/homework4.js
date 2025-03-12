function primeNumber(a){
    if(Number.isInteger(Number(a)) && a > 0){
        if(a==1){
            console.log(`${a} không phải là số nguyên tố`)
        }else{
            let flag=true;
            for(let i=2;i<a;i++){
                if(a%i==0){
                    flag=false;
                    break;
                }
            }
            flag ? console.log(`${a} là số nguyên tố`) : console.log(`${a} không phải là số nguyên tố`)
            return a;
        }
    }
    connsole.log(`Dữ liệu không hợp lệ`)
}
let number=+prompt("Mời bạn nhập số cần kiểm tra");
primeNumber(number);