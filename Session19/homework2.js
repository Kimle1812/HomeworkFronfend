let character=prompt("Mời bạn nhập một kí tự");
if(character.includes("0") && character.includes("1") && character.includes("2") && character.includes("3") && character.includes("4") && character.includes("5") && character.includes("6") && character.includes("7") && character.includes("8") && character.includes("9")){
    console.log("ký tự " + character + " là chữ cái");
}else{
    console.log("ký tự không phải là chữ cái");
}