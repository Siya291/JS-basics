/* .push('') - adds another variable into the list at the end(last)
 .length() - tells us the list of the arrays
 .pop('') - removes the last variable inside an array
 .unshift() - adds items in the array in the front position
 .shift() - removes from the top
 .include() - searches where an if an item is included in an array
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



