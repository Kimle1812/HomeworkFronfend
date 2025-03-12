function isPalindrome(string){
    let arr=string.split("");
    let flag=true;
    for(let i=0;i<arr.length/2;i++){
        if(arr[i]!=arr[arr.length-1-i]){
            flag=false;
            break;
        }
    }
    flag ? console.log("là chuỗi đối xứng") : console.log("không phải chuỗi đối xứng");
}
let string=prompt("Mời bạn nhập chuỗi kí tự");
isPalindrome(string);