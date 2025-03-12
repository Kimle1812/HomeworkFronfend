function filterEmail(arr){
    if(Array.isArray(arr)){
        if(arr.length == 0){
            console.log("Mảng không có phần tử nào");
            return;
        }else{
            let newArr = arr.filter((item) => {
                return item.includes("@") && !item.includes(" ");
            });
            console.log(newArr);
            return newArr;
        }
    }
    console.log("Dữ liệu không hợp lệ")
}

filterEmail(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space @out.com"]);
