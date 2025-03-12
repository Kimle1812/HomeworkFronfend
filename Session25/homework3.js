function even(arr){
    if(Array.isArray(arr)){
        if(arr.length==0){
            return "Mảng không chứa phần tử"
        }
        let even=[];
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]%2==0){
                count++;
                even.push(arr[i]);
            }
        }
        count==0?console.log(`Mảng không chứa số chẵn`):console.log(even);
        return;
    }
    connsole.log(`Dữ liệu không hợp lệ`)
}
even([1,3,5,7])