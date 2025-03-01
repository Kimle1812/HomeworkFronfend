let number_a=+prompt("Mời bạn nhập vào số a");
let number_b=+prompt("Mời bạn nhập vào số b");
let calculation=prompt("Mời bạn nhập vào các phép tính(+,-,*,/)");
let result;
switch(calculation){
    case "+":
        result = number_a+number_b;
        alert("Kết quả của phép tính trên: " + number_a + calculation + number_b + " = " + result );
        break;
    case "-":
        result = number_a - number_b;
        alert("Kết quả của phép tính trên: " + number_a + calculation + number_b + " = " + result );
        break;
    case "*":
        result = number_a * number_b;
        alert("Kết quả của phép tính trên: " + number_a + calculation + number_b + " = " + result );
        break;
    case "/":
        result = number_a / number_b;
        alert("Kết quả của phép tính trên: " + number_a + calculation + number_b + " = " + result );
        break;
    default:
        alert("Bạn nhập sai phép tính.Vui lòng nhập lại!")
        break;
}