function solve(input) {

    let products = [];

    for (let index = 0; index < input.length; index++) {

        let data = input[index].split(" : ");

        let newObject = { productName: data[0], productPrice: Number(data[1]) };

        products.push(newObject);
    }

    products.sort((a, b) => a.productName.toLowerCase().localeCompare(b.productName.toLowerCase()));

    let result = {};

    for (let index = 0; index < products.length; index++) {

        let firstLetter = products[index].productName[0];

        if (!(firstLetter in result)) {

            result[firstLetter] = [];

        }

        result[firstLetter].push(products[index]);
    }

    for (const key in result) {
        
        console.log(key);

        for (const iterator of result[key]) {
        
            console.log(`  ${iterator.productName}: ${iterator.productPrice}`);

        }

    }
}




solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);