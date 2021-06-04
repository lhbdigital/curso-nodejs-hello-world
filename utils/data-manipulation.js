const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map
const mapResult = data.map((element, index) => element + index);
console.log(mapResult);

// Reduce
const reduceResult = data.reduce((previousValue, element, index) => previousValue + element, 0); // Último argumento é o inicializador
console.log(reduceResult);

// Find
const findResult = data.find((element, index) => element % 5 == 0);
console.log(findResult);

// Filter
const filterResult = data.filter((element, index) => element % 2 == 0);
console.log(filterResult);