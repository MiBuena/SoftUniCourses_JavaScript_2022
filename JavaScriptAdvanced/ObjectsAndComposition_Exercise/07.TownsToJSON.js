function solve(inputArray) {

    let headers = inputArray[0].split("|").map(x => x.trim()).filter(x => x !== "");

    let resultArray = [];

    for (let index = 1; index < inputArray.length; index++) {

        let values = inputArray[index].split("|").map(x => x.trim()).filter(x => x !== "");

        let newObject = {};

        for (let i = 0; i < headers.length; i++) {

            if (Number.isNaN(Number(values[i]))) {

                newObject[headers[i]] = values[i];

            } else {

                let numberAsValue = (Number(values[i]) + Number.EPSILON) * 100;
                newObject[headers[i]] = Math.round(numberAsValue) / 100;
            }

        }

        resultArray.push(newObject);
    }

    return JSON.stringify(resultArray);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| VelikoTurnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));