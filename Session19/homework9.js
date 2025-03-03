let result_a = "javascript" + 5;
console.log(result_a);
// Kết quả là javascript5 vì + có thể gán 2 chuỗi lại với nhau
let result_b = "javascript" - 1;
console.log(result_b);
// Kết quả là NaN vì chuỗi javascript không phải là sô để có thể thực hiện phép tính trừ
let result_c = "3" + 2;
console.log(result_c);
// Kết quả là 32 vì + gán 2 chuỗi lại với nhau
let result_d = "5" - 4;
console.log(result_d);
// Kết quả là 1 vì - không phải là phép gán thì java sẽ tự chuyển số 5 thành kiểu dữ liệu number để có thể thực hiện phép tính
let result_e =  isNaN( "123");
console.log(result_e);
// Kết quả là false vì 123 nó là số thì không thuộc kiểu dữ liệu Not of Number
let result_f = isNaN("hello");
console.log(result_f);
// Kết quả là true vì hello nó là chuỗi thì thuộc kiểu dữ liệu Not of Number
let result_g = Number.isNaN("123");
console.log(result_g);
// Kết quả là false vì 123 nó là số thì không thuộc kiểu dữ liệu Not of Number 
let result_h = Number.isNaN(NaN);
console.log(result_h);
// Kết quả là true vì NaN  thuộc kiểu dữ liệu Not of Number
