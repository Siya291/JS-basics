/* .push('') - adds another variable into the list at the end(last)
 .length() - tells us the list of the arrays
 .pop('') - removes the last variable inside an array
 .unshift() - adds items in the array in the front position
 .shift() - removes from the top
 .include() - searches where an if an item is included in an array
 .reverse() - reverses the order of the array
*/

let cities = ["Johannesburg", "Pretoria", "Durban", "Cape Town", "Port Elizabeth"];
cities.shift();
console.log(cities);
cities.unshift("Bloemfontein");
console.log(cities);
if (cities.includes("Bloemfontein")) {
    console.log("City name is in the list of cities");
} else {
    console.log("City name is not in the list of cities");
}

let reversedCities = cities.reverse();
console.log(reversedCities);

//Objects arrays
let cars = [
    { make: "Toyota", model: "Corolla", year: 2020 },
    { make: "Honda", model: "Civic", year: 2019 },
    { make: "Ford", model: "Mustang", year: 2021 }
];

console.log("")
console.log(cars[0].make, cars[0].model, cars[0].year);
console.log(cars[1].make, cars[1].model, cars[1].year);
console.log(cars[2].make, cars[2].model, cars[2].year);

//Function details containing name of student, age, and course
function studentDetails(name, age, course) {
    return `Student Name: ${name}, Age: ${age}, Course: ${course}`;
}
console.log("")
console.log(studentDetails("John Doe", 20, "Computer Science"));

//function that returns price and quantity
function sales(price, quantity) {
    return `Price of the item is: ${price}, Quantity of the item is: ${quantity}`
}
console.log("")
console.log(sales(160, 70));


let products = [{
        name: 'Laptop',
        model: 'Lenovo',
        price: '7400',
        quantity: '4'
    },
    {
        name: 'Car',
        model: 'CLA220d',
        price: '980000',
        quantity: '1'
    },
    {
        name: 'Tropika',
        model: 'Orange',
        price: '40',
        quantity: '3'
    }]
;

function display() {
    return (products[2].name)

}
console.log("")
console.log(display());