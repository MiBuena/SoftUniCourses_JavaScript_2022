function solve(inputArray) {
    inputArray.sort((a, b) => a - b);

    let result = [];

    for (let index = 0; index < inputArray.length / 2; index++) {

        result.push(inputArray[index]);

        let secondIndex = inputArray.length - index - 1;
        
        if (index != secondIndex) {
            result.push(inputArray[secondIndex]);
        }
    }

    return result;
}

console.log(solve([1, 2, 3, 4, 5]));