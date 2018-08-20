commandSpliter = (string) => {

commandArr =[];

commandArr=string.split("")
return commandArr;

};

commandLength =(string)=>{

    commandArr=string.split("")
    let comLength = commandArr.length
    return comLength;

}

console.log(commandSpliter("LLLLLMMM"))
console.log(commandLength("LLLLLMMM"))
