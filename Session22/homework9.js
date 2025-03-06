let numbers=[2,5,7,4,1,8,6,2,5,7];
let sortNumbers=numbers.sort();
for(let i= 0;i<sortNumbers.length;i++){
    if(sortNumbers[i] == sortNumbers[i+1]){
        sortNumbers.splice(i+1,1);
    }
}
console.log(sortNumbers);