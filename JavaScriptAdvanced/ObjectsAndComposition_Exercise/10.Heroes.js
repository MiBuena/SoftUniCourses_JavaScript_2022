function solve(){

    let heroesFactory = {};


    heroesFactory.mage = function(name) {

        let mage = {
            name: name,
            health: 100,
            mana: 100,
            cast(magicName) {
                this.mana--;
                console.log(`${this.name} cast ${magicName}`);
            }
        };

        return mage;
    }

    heroesFactory.fighter = function(name) {

        let fighter = {
            name: name,
            health: 100,
            stamina: 100,
            fight() {
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);                 
            }
        };

        return fighter;
    }

    return heroesFactory;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
