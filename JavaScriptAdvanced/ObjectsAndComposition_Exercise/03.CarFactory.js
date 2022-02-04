function solve(inputObject) {

    let smallEngine = {
        power: 90,
        volume: 1800
    };

    let normalEngine = {
        power: 120,
        volume: 2400
    };

    let monsterEngine = {
        power: 200,
        volume: 3500
    };

    let engines = [smallEngine, normalEngine, monsterEngine];


    let hatchBackCarriage = {
        type: 'hatchback',
        color: undefined
    };

    let coupeCarriage = {
        type: 'coupe',
        color: undefined
    };

    let carriages = [hatchBackCarriage, coupeCarriage];

    let engineToInstall = {};

    if(inputObject.power <= 90){

        engineToInstall = smallEngine;

    } else if(inputObject.power > 90 && inputObject.power <= 120) {

        engineToInstall = normalEngine;

    } else {
        engineToInstall = monsterEngine;
    }


    let carriageToInstall = carriages.find(x => x.type === inputObject.carriage);
    carriageToInstall.color = inputObject.color;

    let wheelSize = inputObject.wheelsize;

    if(inputObject.wheelsize % 2 === 0) {
        wheelSize = wheelSize - 1;
    }

    let result = {
        model: inputObject.model,
        engine: engineToInstall,
        carriage: carriageToInstall,
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
    };

    return result;
}

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));