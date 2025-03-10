let choice;
let arr=[];
do{
    choice=+prompt(
        `               MENU
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
        7. Thoát chương trình
        Lựa chọn của bạn là:
        `)
    switch(choice){
        case 1:
            //Nhập mảng
            let number;
            do{
                number = +prompt("Nhập số lượng phần tử bạn muốn thêm vào mảng: ");
            }while(!Number.isInteger(number) || number < 0)
            for (let i = 0; i < number; i++) {
                do{
                    arr[i]=+prompt("Nhập phần tử thứ "+(i+1)+": ");
                }while(!Number.isInteger(Number(arr[i])))
            }
            console.log(arr);
            break;
        case 2:
            //Hiển thị mảng
            console.log(arr);
            break;
        case 3:
            //Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
            for(let i=0;i<arr.length;i++){
                for(let j=0;j<arr.length;j++){
                    if(arr[j]>arr[j+1]){
                        let temp=arr[j];
                        arr[j]=arr[j+1];
                        arr[j+1]=temp;
                    }
                }
            }
            console.log("Giá trị lớn nhất trong mảng là: " + arr.length-1);
            break;
        case 4:
            //Tính tổng và trung bình cộng của các số dương trong mảng
            let sumEven=0;
            let count=0;
            for(let i=0;i<arr.length;i++){
                if(arr[i]>0){
                    sumEven+=arr[i];
                    count++;
                }
            }
            let average=sumEven/count;
            console.log(`Trung bình cộng của mảng là: ${average}`)
            break;
        case 5:
            //Đảo ngược mảng
            let reverse=[]
            for(let i=arr.length-1;i>=0;i--){
                reverse.push(arr[i]);
            }
            console.log(reverse);
            break;
        case 6:
            //Kiểm tra mảng có đối xứng không
            let isSymmetric = true;
            for (let i = 0; i < array.length / 2; i++) {
                if (array[i] != array[array.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            if (isSymmetric) {
                console.log("Mảng đối xứng");
            } else {
                console.log("Mảng không đối xứng");
            }
            break;
        case 7:
            //Thoát chương trình
            console.log("Cảm ơn bạn đã sử dụng chương trình")
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}while(choice!=7);