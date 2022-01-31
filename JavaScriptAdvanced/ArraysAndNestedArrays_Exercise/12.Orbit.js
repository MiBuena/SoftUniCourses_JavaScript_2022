function solve(input) {
    let matrixRows = input[0];
    let matrixCols = input[1];

    let starRow = input[2];
    let starCol = input[3];

    let number = 1;

    let areAllCellsFilled = false;

    let matrix = [];

    for (let row = 0; row < matrixRows; row++) {

        matrix[row] = [];

        for (let col = 0; col < matrixCols; col++) {

            let numberToFillAccordingToRow = Math.abs(row - starRow);
            let numberToFillAccordingToCol = Math.abs(col - starCol);

            let numberToFill = Math.max(numberToFillAccordingToRow, numberToFillAccordingToCol) + 1;

            matrix[row][col] = numberToFill;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        let rowJoined = matrix[row].join(" ");
        console.log(rowJoined);
    }

}

solve([3, 3, 2, 2]);