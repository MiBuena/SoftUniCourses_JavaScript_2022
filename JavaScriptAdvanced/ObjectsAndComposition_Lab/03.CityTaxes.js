function solve(name, population, treasury){

    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(percentage / 100 * this.population);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(percentage / 100 * this.treasury);
        }
    };

    return city;
}

const city =
  solve('Tortuga',
  7000,
  15000);

console.log(city);

