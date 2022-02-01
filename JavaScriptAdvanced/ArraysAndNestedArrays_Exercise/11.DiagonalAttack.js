function solve(input) {
    let matrix = [];

    for (let index = 0; index < input.length; index++) {
        let matrixRow = input[index].split(" ").map(num => parseInt(num));

        matrix.push(matrixRow);
    }

    let sumLeftDiagonal = checkLeftDiagonal(matrix);
    let sumRightDiagonal = checkRightDiagonal(matrix);

    if (sumLeftDiagonal === sumRightDiagonal) {

        fillNotDiagonalSquares(sumLeftDiagonal, matrix);
    }

    printMatrix(matrix);

    function fillNotDiagonalSquares(sum, matrix) {

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {

                let belongs = belongsToDiagonals(row, col, matrix);

                if(!belongs) {

                    matrix[row][col] = sum;

                }

            }
        }

    }

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            let rowJoined = matrix[row].join(" ");
            console.log(rowJoined);
        }
    }

    function belongsToDiagonals(row, col, matrix) {

        if (row == col) {

            return true;
        }

        if(row == matrix.length - col - 1) {
            return true;
        }
    }

    function checkLeftDiagonal(matrix) {

        let sumLeftDiagonal = 0;

        for (let row = 0; row < matrix.length; row++) {

            sumLeftDiagonal += matrix[row][row];
        }

        return sumLeftDiagonal;
    }

    function checkRightDiagonal(matrix) {

        let sumRightDiagonal = 0;
        let col = matrix[0].length - 1;

        for (let row = 0; row < matrix.length; row++) {
            sumRightDiagonal += matrix[row][col];
            col--;
        }

        return sumRightDiagonal;
    }
}



solve(['1 1 1',
'1 1 1',
'1 1 0']);

