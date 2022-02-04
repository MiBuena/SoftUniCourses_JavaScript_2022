function solve(inputArray) {
    let result = {};

    for (let index = 0; index < inputArray.length; index+=2) {
         
        let element = inputArray[index];
        let calories = inputArray[index+1];

        result[element] = Number(calories);        
    }

    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);