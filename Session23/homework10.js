let choice;
let arr=[];
do{
    choice=+prompt(
        `               MENU
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
        6. Nhập một số và đếm số lần xuất hiện trong mảng 
        7. Thêm một phần từ vào vị trí chỉ định
        8. Xóa một phần tử theo giá trị 
        9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần 
        0. Thoát
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
            // In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
            let even=[];
            let sumEven=0;
            for(let i = 0; i < arr.length; i++){
                if(arr[i]%2==0){
                    sumEven+=arr[i];
                    even.push(arr[i]);
                }
            }
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < arr.length; j++){
                    if(arr[j]<arr[j+1]){
                        let temp=arr[j];
                        arr[j]=arr[j+1];
                        arr[j+1]=temp;
                    }
                }
            }
            console.log("Giá trị các phần tử chẵn là: " + even);
            console.log(`Tổng của các giá trị chẵn là: ${sumEven}`);
            console.log(`Mảng được sắp xếp giảm dần là ${arr}`)
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
            //In ra các số nguyên tố trong mảng và tính tổng 
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
            //Nhập một số và đếm số lần xuất hiện trong mảng 
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
            //Xóa một phần tử theo giá trị 
            let numberDelete=+prompt("Mời bạn nhập giá trị cần xóa trong mảng");
            for(let i=0;i<arr.length;i++){
                if(arr[i]==numberDelete){
                    arr.splice(i,numberDelete)
                }
            }
            console.log(arr);
            break;
        case 9:
            // Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
            do{
                choiceSort=+prompt(`
                    1.Sắp xếp tăng dần
                    2.Sắp xếp giảm dần
                    0.Thoát
                    `)
                switch(choiceSort){
                    case 1://Sắp xếp tăng dần
                        for(let i = 0; i < arr.length; i++){
                            for(let j = 0; j < arr.length; j++){
                                if(arr[j]>arr[j+1]){
                                    let temp=arr[j];
                                    arr[j]=arr[j+1];
                                    arr[j+1]=temp;
                                }
                            }
                        }
                        console.log(`Mảng được sắp xếp tăng dần là ${arr}`)
                        break;
                    case 2://Sắp xếp giảm dần
                        for(let i = 0; i < arr.length; i++){
                            for(let j = 0; j < arr.length; j++){
                                if(arr[j]<arr[j+1]){
                                    let temp=arr[j];
                                    arr[j]=arr[j+1];
                                    arr[j+1]=temp;
                                }
                            }
                        }
                        console.log(`Mảng được sắp xếp giảm dần là ${arr}`)
                        break;
                    case 0:
                        break;
                    default:
                        console.log("Lựa chọn không hợp lệ");
                        break;
                }    
            }while(choiceSort!=0);
            break;
        case 0:
            //Thoát
            console.log("Cảm ơn bạn đã sử dụng chương trình")
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}while(choice!=0);