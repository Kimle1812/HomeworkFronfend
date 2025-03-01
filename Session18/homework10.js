let number=prompt("Mời bạn nhập số nguyên trong khoảng 0 -> 999");
let ones_place = number.charAt(2);
let tens_place = number.charAt(1);
let hundreds_place = number.charAt(0);
let read_hundreds;
if( Number(number) >= 0 && Number(number) <= 999){
    switch(hundreds_place){
        case "1":
            read_hundreds = "Một trăm ";
            break;
        case "2":
            read_hundreds = "Hai trăm ";
            break;
        case "3":
            read_hundreds = "Ba trăm ";
            break;
        case "4":
            read_hundreds = "Bốn trăm ";
            break;
        case "5":
            read_hundreds = "Năm trăm ";
            break;
        case "6":
            read_hundreds = "Sáu trăm ";
            break;
        case "7":
            read_hundreds = "Bảy trăm ";
            break;
        case "8":
            read_hundreds = "Tám trăm ";
            break;
        case "9":
            read_hundreds = "Chín trăm ";
            break;
        default:
            break;
    }
    if(Number(hundreds_place) != 0 && Number(tens_place) == 0){
        read_tens = "Linh ";
    }else{
        switch(tens_place){
            case "1":
                read_tens = "Mười ";
                break;
            case "2":
                read_tens ="Hai Mươi ";
                break;
            case "3":
                read_tens = "Ba Mươi ";
                break;
            case "4":
                read_tens = "Bốn Mươi ";
                break;
            case "5":
                read_tens = "Năm Mươi ";
                break;
            case "6":
                read_tens ="Sáu Mươi ";
                break;
            case "7":
                read_tens = "Bảy Mươi ";
                break;
            case "8":
                read_tens = "Tám Mươi ";
                break;
            case "9":
                read_tens = "Chín Mươi ";
                break;
            default:
                break;
        }
    }
    switch(ones_place){
        case "1":
            read_ones = "Một ";
            break;
        case "2":
            read_ones = "Hai ";
            break;
        case "3":
            read_ones = "Ba ";
            break;
        case "4":
            read_ones = "Bốn ";
            break;
        case "5":
            read_ones = "Năm ";
            break;
        case "6":
            read_ones = "Sáu ";
            break;
        case "7":
            read_ones = "Bảy ";
            break;
        case "8":
            read_ones = "Tám ";
            break;
        case "9":
            read_ones = "Chín ";
            break;
        default:
            break;
    }
    console.log(read_hundreds + read_tens.toLowerCase() + read_ones.toLowerCase());
}else{
    console.log("Bạn nhập sai.Vui lòng nhập số nguyên trong khoảng 0 -> 999!");
}