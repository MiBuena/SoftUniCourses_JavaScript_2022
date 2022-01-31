 function solve(inputArray) {
    inputArray.sort((a, b) => a.localeCompare(b));

    for (let index = 0; index < inputArray.length; index++) {
        console.log(`${index+1}.${inputArray[index]}`);
    } 
 }

 solve(["John", "Bob", "Christina", "Ema"]);