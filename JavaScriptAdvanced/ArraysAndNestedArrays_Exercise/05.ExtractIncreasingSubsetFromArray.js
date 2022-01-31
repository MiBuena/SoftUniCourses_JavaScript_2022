function solve(inputArray){

    let currentBiggestNumber = inputArray[0];
    let increasingSequence = [currentBiggestNumber];

    for (let index = 1; index < inputArray.length; index++) {
        if(inputArray[index] >= currentBiggestNumber) {
            increasingSequence.push(inputArray[index]);
            currentBiggestNumber = inputArray[index];
        }
    }

    return increasingSequence;
}

solve([1, 2, 3, 4]);