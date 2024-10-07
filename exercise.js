const greet = name => `Hello ${name}!`
console.log(greet("Arthur"))

const add = (a, b) => a + b;
console.log(add(13, 7))

const isEven = n => n%2 == 0 ? 'Even' : 'Odd';
console.log(isEven(3));

const doubleValues = arr => arr.map(num => num * 2)
console.log(doubleValues([1,2,3,4]))

const myArray = [1, -2, 3, -4, 6, -7];
const filterPositive = arr => {
    const positives = arr.filter(num => num > 0);
    return positives.length > 0 ? positives : "No positive numbers";
}
console.log(filterPositive(myArray))

let student = {
    {name:"Arthur", grade:45}
    {name:"Kyra", grade:86}
}
const getGrade = student => student.grade > 50 ? 'Pass' : 'Fail';
console.log(`The student ${arthur.name} receive a grade ${arthur.grade}. Final result: ${getGrade(arthur)}`)
