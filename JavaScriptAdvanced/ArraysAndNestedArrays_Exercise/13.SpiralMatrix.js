function solve(matrixRows, matrixCols) {

    let startNumber = 1;

    let matrix = [];

    for (let index = 0; index < matrixRows; index++) {
        matrix[index] = [];        
    }

    let hasFillingHappened = false;

    let result = [startNumber, 0, 0, hasFillingHappened];

    while (true) {

        result[3] = false;

        result = fillRight(result[0], result[1], result[2], matrixRows, matrixCols, matrix, result[3]);

        result = fillDown(result[0], result[1], result[2], matrixRows, matrixCols, matrix, result[3]);

        result = fillLeft(result[0], result[1], result[2], matrixRows, matrixCols, matrix, result[3]);

        result = fillUp(result[0], result[1], result[2], matrixRows, matrixCols, matrix, result[3]);

        if(result[3]==false){
            break;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        let rowJoined = matrix[row].join(" ");
        console.log(rowJoined);
    }

    function fillRight(startNumber, startRow, startCol,  matrixRows, matrixCols, matrix, hasFillingHappened) {
        let col = startCol;

        for (col; col < matrixCols; col++) {

            if (matrix[startRow][col] != undefined) {
                break;
            }

            matrix[startRow][col] = startNumber;
            startNumber++;
            hasFillingHappened = true;
        }

        return [startNumber, startRow+1, col - 1, hasFillingHappened];
    }

    function fillDown(startNumber, startRow, startCol, matrixRows, matrixCols, matrix, hasFillingHappened) {

        let row = startRow;

        for (row; row < matrixRows; row++) {
            
            if(matrix[row][startCol] != undefined) {
                break;
            }

            matrix[row][startCol] = startNumber;
            startNumber++;
            hasFillingHappened = true;
        }

        return [startNumber, row-1, startCol-1, hasFillingHappened];
    }

    function fillLeft(startNumber, startRow, startCol, matrixRows, matrixCols, matrix, hasFillingHappened) {
        
        let col = startCol; 

        for (col; col >= 0; col--) {
            
            if(matrix[startRow][col] != undefined) {
                break;
            }

            matrix[startRow][col] = startNumber;
            startNumber++;
            hasFillingHappened = true;       
         }

         return [startNumber, startRow-1, col+1, hasFillingHappened];
        }

    function fillUp(startNumber, startRow, startCol, matrixRows, matrixCols, matrix, hasFillingHappened) {

        let row = startRow;
        for (row; row >= 0; row--) {
            if(matrix[row][startCol] != undefined) {
                break;
            } 
            
            matrix[row][startCol] = startNumber;
            startNumber++;
            hasFillingHappened = true;  
        }

        return [startNumber, row+1, startCol+1, hasFillingHappened];
    }
}

solve(3, 3);