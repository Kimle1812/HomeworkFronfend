let side_a=+promopt("Mời bạn nhập cạnh a của tam giác");
let side_b=+promopt("Mời bạn nhập cạnh b của tam giác");
let side_c=+promopt("Mời bạn nhập cạnh c của tam giác");
if(side_a + side_b > side_c && side_a + side_c > side_b && side_b + side_c > side_a){
    if(side_a==side_b && side_a==side_c){
        console.log("Tam giác đều");
    }else if(side_a==side_b && side_b!=side_c || side_a==side_c && side_a!=side_b || side_b==side_c && side_b!=side_a){
        console.log("Tam giác cân");
    }else if(side_a*side_a + side_b*side_b == side_c*side_c || side_a*side_a + side_c*side_c == side_b*side_b || side_c*side_c + side_b*side_b == side_a*side_a){
        console.log("Tam giác vuông");
    }else{
        console.log("Tam giác thường");
    }
} else{
    console.log("Không thể tạo thành tam giác");
}
