function solve(inputArray) {

    let heros = [];

    for (let heroData of inputArray) {
        
        let splittedData = heroData.split("/");

        let items = [];

        if(splittedData.length === 3) {
            items = splittedData[2].split(',').map(x => x.trim());
        }

        let hero = {
            name: splittedData[0].trim(),
            level: Number(splittedData[1]),
            items: items
        };

        heros.push(hero);
    }

    return JSON.stringify(heros);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));

