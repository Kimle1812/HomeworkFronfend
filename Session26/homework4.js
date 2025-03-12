findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
function findPrimes(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            console.log("Mảng không có phần tử nào");
            return;
        } else {
            let primeArr = arr.filter((item)=>{
                return isPrime;
            });
            console.log(primeArr);
            return primeArr;
        }
    }
    console.log("Dữ liệu không hợp lệ");
}
function isPrime(num) {
    if (num <= 1){
        console.log("số nguyên tố phải lớn hơn 1");
        return false;
    }else{
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0){
                return false;
            }
        }
        return true;
    }
}