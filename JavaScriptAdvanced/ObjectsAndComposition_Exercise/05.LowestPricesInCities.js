function solve(inputArray) {

    let productsAssociativeArray = {};

    for (let index = 0; index < inputArray.length; index++) {
        
        let lineData = inputArray[index].split(" | ");

        if(!(lineData[1] in productsAssociativeArray)) {

            productsAssociativeArray[lineData[1]] = {
                town: lineData[0], 
                lowestPrice: Number(lineData[2])
            };

        } else {

            let currentRecord = productsAssociativeArray[lineData[1]];

            if(currentRecord.lowestPrice > Number(lineData[2])) {

                productsAssociativeArray[lineData[1]] = {
                    town: lineData[0],
                    lowestPrice: Number(lineData[2])
                }
            }
        }        
    }

    for (let key in productsAssociativeArray) {
        console.log(`${key} -> ${productsAssociativeArray[key].lowestPrice} (${productsAssociativeArray[key].town})`);
    }
    

}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);