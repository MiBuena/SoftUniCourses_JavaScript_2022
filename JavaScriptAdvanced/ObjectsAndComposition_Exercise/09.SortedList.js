function solve() {

    let list = {
        numbers: [],
        size: 0,
        add(number) {
            this.numbers.push(number);
            this.size++;
            this.numbers.sort((a, b) => a - b);
        },
        remove(index) {

            if (index >= 0 && index < this.numbers.length) {

                this.numbers.splice(index, 1);
                this.size--;
            }
        },
        get(index) {
            let valueToReturn = this.numbers[index];
            return valueToReturn;
        }
    }

    return list;
}

let list = solve();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
