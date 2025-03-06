let odd=0;
let even=0;
let flag=true;
let number=[1,4,7,8,3];
for(let i=0;i<5;i++){
    if(number[i]%2==0){
        even+=number[i];
    }else{
        odd+=number[i];
    }
}
console.log(`Tổng các số chẵn ${even}`)
console.log(`Tổng các số lẻ ${odd}`)