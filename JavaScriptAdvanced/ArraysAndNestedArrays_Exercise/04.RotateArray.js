function solve(inputArray, number) {
    for (let index = 0; index < number; index++) {
        let lastNumber = inputArray.pop();  
        inputArray.unshift(lastNumber);   
    }

    console.log(inputArray.join(" "));
}

solve(["Banana", "Orange", "Coconut", "Apple"], 15);