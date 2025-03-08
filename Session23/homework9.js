let choice;
let arr=[];
do{
    choice=+prompt(
        `               MENU
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra giá trị các phần tử chẵn và tính tổng
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
        6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
        7.Thêm một phần từ vào vị trí chỉ định
        8.Thoát
        Lựa chọn của bạn là:
        `)
    switch(choice){
        case 1:
            //Nhập số phần tử cần nhập và giá trị các phần tử
            let number = +prompt("Nhập số lượng phần tử bạn muốn thêm vào mảng: ");
            for (let i = 0; i < number; i++) {
                arr.push(+prompt("Nhập phần tử thứ "+(i+1)+": "));
            }
            console.log(arr);
            break;
        case 2:
            //In ra giá trị các phần tử đang quản lý
            console.log(arr);
            break;
        case 3:
            //In ra giá trị các phần tử chẵn và tính tổng
            let even=[];
            let sumEven=0;
            for(let i = 0; i < arr.length; i++){
                if(arr[i]%2==0){
                    sumEven+=arr[i];
                    even.push(arr[i]);
                }
            }
            console.log("Giá trị các phần tử chẵn là: " + even);
            console.log(`Tổng của các giá trị chẵn là: ${sumEven}`);
            break;
        case 4:
            //In ra giá trị lớn nhất và nhỏ nhất trong mảng
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < arr.length; j++){
                    if(arr[j]>arr[j+1]){
                        let temp=arr[j];
                        arr[j]=arr[j+1];
                        arr[j+1]=temp;
                    }
                }
            }
            console.log(`Giá trị lớn nhất mảng là ${arr[arr.length-1]}`);
            console.log(`Giá trị nhỏ nhất mảng là ${arr[0]}`);
            break;
        case 5:
            let primeNumber = [];
            let sumPrime = 0;

            for (let i = 0; i < arr.length; i++) {
                let check = true;
                if (arr[i] < 2) {
                    check = false;
                } else {
                    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                        if (arr[i] % j == 0) {
                            check = false;
                            break;
                        }
                    }
                }
                if (check) {
                    primeNumber.push(arr[i]);
                    sumPrime += arr[i];
                }
            }
            console.log(primeNumber);
            console.log(`Tổng của các số nguyên tố là ${sumPrime}`);

            break;
        case 6:
            //Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
            let numberSearch=+prompt("Mời bạn nhập số cần check");
            let count=0;
            for(let i=0;i<arr.length;i++){
                if(arr[i]==numberSearch){
                    count++;
                }
            }
            if(count==0){
                console.log("Số bạn nhập không có trong mảng")
            }else{
                console.log(`Số ${numberSearch} có ${count} phần tử trong mảng`)
            }
            break;
        case 7:
            //Thêm một phần từ vào vị trí chỉ định
            let indexAdd=+prompt("Mời bạn nhâp vị trí cần add phần tử");
            let numberAdd=+prompt("Mời bạn nhập giá trị phần tử cần add");
            arr.splice(indexAdd,0,numberAdd);
            console.log(arr);
            break;
        case 8:
            //Thoát
            console.log("Cảm ơn bạn đã sử dụng chương trình")
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}while(choice!=8);