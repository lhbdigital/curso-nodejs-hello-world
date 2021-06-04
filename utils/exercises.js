
// Exercícios
const data = Array(100).fill(0).map((_, i) => i);

// Ex 1
const ex1 = data.filter(el => el % 2 == 0).reduce((acc, el) => acc + el, 0);
console.log('Ex 1:', ex1);

// Ex 2
const ex2 = data.filter(el => el % 2 == 1).map(el => el * el);
console.log('Ex 2:', ex2);

// Ex 3
const ex3 = data.find(el => ((el / 10 | 0) + el % 10) === 10);
console.log('Ex 3:', ex3);

// Ex 4
const ex4 = data.filter(el => ((el / 10 | 0) + el % 10) === 10);
console.log('Ex 4:', ex4);

// Ex 5
const ex5 = data.slice(0, (data.length / 2) + 1).map((el, i) => el + data[data.length - 1 - i]);
console.log('Ex 5:', ex5);