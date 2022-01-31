function solve(commands) {

    let initialNumber = 0;
    let numbersArray = [];

    for (let index = 0; index < commands.length; index++) {

        initialNumber++;

        let command = commands[index];

        if(command == "add") {
            numbersArray.push(initialNumber);
        } else {
            numbersArray.pop();
        }       
    }

    if(numbersArray.length == 0) {
        console.log("Empty");
    } else {

        numbersArray.forEach(element => {
            console.log(element);
        });
    }
}

solve(["remove", "remove", "remove"]);