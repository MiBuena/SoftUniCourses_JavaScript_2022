function solve(inputArray) {

    inputArray.sort((a, b) => orderBy2Criteria(a, b));

    for (const iterator of inputArray) {
        console.log(iterator);
    }

    function orderBy2Criteria(a, b) {
        if(a.length != b.length) {
            return a.length - b.length;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }
}

solve(['test', 
'Deny', 
'omen', 
'Default']
);