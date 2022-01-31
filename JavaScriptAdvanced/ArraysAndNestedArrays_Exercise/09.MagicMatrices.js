function solve(matrix) {

    let magicSum = 0;

    for (let index = 0; index < matrix[0].length; index++) {
        magicSum += matrix[0][index];        
    }

    let isMagic = true;

    for (let row = 1; row < matrix.length; row++) {
        let rowSum = 0;

        for (let col = 0; col < matrix[row].length; col++) {

            rowSum += matrix[row][col]; 

        }
        
        if(rowSum != magicSum) {
            isMagic = false;
            break;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;

        for (let row = 0; row < matrix.length; row++) {

            colSum += matrix[row][col];        
        }
        
        if(colSum != magicSum) {
            isMagic = false;
            break;
        }
    }

    return isMagic;
}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);