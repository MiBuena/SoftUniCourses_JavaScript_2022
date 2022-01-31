function solve(moves) {

    let matrix = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let playerSign = "X";

    let playerWins = true;

    for (let index = 0; index < moves.length; index++) {

        let values = moves[index].split(" ");

        if (matrix[values[0]][values[1]] != false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        } else {
            matrix[values[0]][values[1]] = playerSign;
        }

        playerWins = checkRightDiagonal(playerSign, matrix);

        if (playerWins) {
            console.log(`Player ${playerSign} wins!`);
            printMatrix(matrix);
            break;
        }

        playerWins = checkLeftDiagonal(playerSign, matrix);

        if (playerWins) {
            console.log(`Player ${playerSign} wins!`);
            printMatrix(matrix);
            break;
        }

        playerWins = checkWinHorizontally(values[0], values[1], playerSign, matrix);

        if (playerWins) {
            console.log(`Player ${playerSign} wins!`);
            printMatrix(matrix);
            break;
        }

        playerWins = checkWinVertically(values[0], values[1], playerSign, matrix);

        if (playerWins) {
            console.log(`Player ${playerSign} wins!`);
            printMatrix(matrix);
            break;
        }

        let allPositionsTaken = allPositionsAreTaken(matrix);

        if(allPositionsTaken) {
            break;
        }

        if (playerSign == "X") {
            playerSign = "O";
        } else {
            playerSign = "X";
        }
    }

    if (!playerWins) {
        console.log("The game ended! Nobody wins :(");
        printMatrix(matrix);
    }

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            let rowJoined = matrix[row].join("\t");
            console.log(rowJoined);
        }
    }

    function allPositionsAreTaken(matrix) {

        let allAreTaken = true;

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(matrix[row][col] == false) {
                    allAreTaken = false;
                    break;
                } 
            }
        }

        return allAreTaken;
    }

    function checkRightDiagonal(playerSign, matrix) {

        let col = 2;
        for (let row = 0; row < matrix.length; row++) {

            if (matrix[row][col] != playerSign) {
                return false;
            }

            col--;
        }

        return true;
    }

    function checkLeftDiagonal(playerSign, matrix) {

        let playerWins = true;

        for (let row = 0; row < matrix.length; row++) {

            if (matrix[row][row] != playerSign) {
                return false;
            }
        }

        return true;
    }

    function checkWinHorizontally(inputRow, inputCol, playerSign, matrix) {

        let playerWins = true;

        for (let col = 0; col < matrix[inputRow].length; col++) {
            if (matrix[inputRow][col] != playerSign) {
                playerWins = false;
                break;
            }
        }

        return playerWins;
    }

    function checkWinVertically(inputRow, inputCol, playerSign, matrix) {
        let playerWins = true;

        for (let row = 0; row < matrix.length; row++) {
            if (matrix[row][inputCol] != playerSign) {
                playerWins = false;
            }
        }

        return playerWins;
    }


}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);
