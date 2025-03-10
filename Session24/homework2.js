let choice;
let arr=[];
do{
    choice=+prompt(
        `               MENU
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ hai trong mảng
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
            //Tìm các phần tử chẵn và lẻ
            let even=[];
            let odd=[];
            for(let i = 0; i < arr.length; i++){
                arr[i]%2== 0 ? even.push(arr[i]) : odd.push(arr[i])
            }
            console.log("Giá trị các phần tử chẵn là: " + even);
            console.log("Giá trị các phần tử lẻ là: " + odd);
            break;
        case 4:
            //Tính trung bình cộng của mảng
            let sumArr=0;
            for(let i=0;i<arr.length;i++){
                sumArr+=arr[i];
            }
            let average=sumArr/arr.length;
            console.log(`Trung bình cộng của mảng là: ${average}`)
            break;
        case 5:
            //Xóa phần tử tại vị trí chỉ định
            let indexDelete;
            do{
                indexDelete = +prompt("Mời bạn nhâp vị trí cần xóa phần tử");
            }while(!Number.isInteger(indexDelete) || indexDelete < 0 || indexDelete > arr.length)
            arr.splice(indexDelete,1);
            console.log(`Mảng sau khi xóa là: `);
            console.log(arr);
            break;
        case 6:
            //Tìm phần tử lớn thứ hai trong mảng
            let secondNumber=0;
            for(let i=0;i<arr.length;i++){
                for(let j=0;j<arr.length;j++){
                    if(arr[j]>arr[j+1]){
                        let temp=arr[j];
                        arr[j]=arr[j+1];
                        arr[j+1]=temp;
                    }
                }
            }
            for(let i=arr.length-1;i>=0;i--){
                if(arr[arr.length]>arr[i]){
                    secondNumber=arr[i];
                    break;
                }
            }
            console.log(`Số lớn thứ hai trong mảng là: ${secondNumber}`)
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