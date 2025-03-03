let month=prompt("Mời bạn nhập số tháng");
if(Number.isInterger(month)){
    if(month<=3 && month >=1){
        console.log("mùa xuân");
    }else if(month<=6 && month >=4){
        console.log("mùa hạ");
    }else if(month<=9 && month >=7){
        console.log("mùa thu");
    }else if(month<=12 && month >=10){
        console.log("mùa đông");
    }else{
        console.log("tháng không hợp lệ");
    }
}
