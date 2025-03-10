let choice;
let arr=[];
do{
    choice=+prompt(
        `               MENU
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của một phần tử trong mảng
        6. Sắp xếp mảng tăng dần
        7. Thoát chương trình
        Lựa chọn của bạn là:
        `)
    switch(choice){
        case 1:
            //Nhập mảng
            let number = +prompt("Nhập số lượng phần tử bạn muốn thêm vào mảng: ");
            for (let i = 0; i < number; i++) {
                arr.push(+prompt("Nhập phần tử thứ "+(i+1)+": "));
            }
            console.log(arr);
            break;
        case 2:
            //Hiển thị mảng
            console.log(arr);
            break;
        case 3:
            //Tìm phần tử lớn nhất và nhỏ nhất trong mảng
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
        case 4:
            //Tính tổng các phần tử trong mảng
            let sumArr=0;
            for(let i=0;i<arr.length;i++){
                sumArr+=arr[i];
            }
            console.log(`Tổng của các phần tử trong mảng là: ${sumArr}`)
            break;
        case 5:
            //Tìm số lần xuất hiện của một phần tử trong mảng
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
        case 6:
            //Sắp xếp mảng tăng dần
            for(let i=0;i<arr.length;i++){
                for(let j=0;j<arr.length;j++){
                    if(arr[j]>arr[j+1]){
                        let temp=arr[j];
                        arr[j]=arr[j+1];
                        arr[j+1]=temp;
                    }
                }
            }
            console.log(`Mảng sau khi sắp xếp là: `);
            console.log(arr)
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