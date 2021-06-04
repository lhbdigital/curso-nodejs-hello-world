const obj = {
    name: "Leonardo",
    age: 24,
    courses: [{
        name: "Informática",
        start: 2012,
        end: 2014
    }],
    isWorking: true
}

console.log(obj.name);

console.log(obj['age']);

console.log(obj.courses.length);

console.log(Object.keys(obj)); // Lista das chaves

console.log(Object.values(obj)); // Lista dos valores

console.log(JSON.stringify(obj))