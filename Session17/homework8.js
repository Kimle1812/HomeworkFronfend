let date1 = new Date(prompt("Nhập ngày thứ nhất (YYYY-MM-DD):"));
let date2 = new Date(prompt("Nhập ngày thứ hai (YYYY-MM-DD):"));
let result=Math.abs(date1-date2)/(1000*60*60*24);//milisecond s 1000ml =1s
console.log("Độ chênh lệch là: " + result + " ngày");