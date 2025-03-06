let numbers=[2,5,7,4,1,8,6,2,5,7];
let count_all=0;
let number=0;
for(let i=0;i<numbers.length-1;i++){
    let count=0;
    for(let j=0;j<numbers.length;j++){
        if(numbers[i]==numbers[j]){
            count++;
        }
    }
    if(count_all==count){
        if(number>numbers[i]){
            number=numbers[i];
        }
    }else if(count_all<count){
        count_all=count;
        number=numbers[i];
    }
}
console.log(number);