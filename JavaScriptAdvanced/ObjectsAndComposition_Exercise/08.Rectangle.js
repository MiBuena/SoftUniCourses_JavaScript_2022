function solve(width, height, color) {

    let rectangle = {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea() {
            let area = this.width * this.height;

            return area;
        }
    }

    return rectangle;
}


let rect = solve(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
