function solve(inputArray){

    let townRecords = {};

    for (const iterator of inputArray) {
        
        let cityData = iterator.split(" <-> ");

        if(cityData[0] in townRecords) {

            townRecords[cityData[0]] += Number(cityData[1]);

        } else {

            townRecords[cityData[0]] = Number(cityData[1]);
        }
    }

    for (let key in townRecords) {
        console.log(`${key} : ${townRecords[key]}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);