function solve(inputArray, number) {

    let filteredArray = inputArray.filter((x, index) => index % number === 0)

    return filteredArray;
}