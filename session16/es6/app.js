// use const and let to define variables
const var1 = 5;
let var2 = 10;

// use arrow function to calculate sum of 2 numbers
let sum = (a,b) =>  {return a + b;};
console.log(sum(var1,var2));

// use template string to combine values into one string
let userName = "John";
let age = 30;

let greeting = `Hi! My name is ${userName}. I am ${age} years old.`;
console.log(greeting);

// destructuring values of an object
let person = {
    userName: "Rikkei Academy",
    age: 2,
    address: {
        street: "Me Tri",
        city: "Hanoi",
    }
};

let [objectName, objectAge, objectAddress] = [person.userName, person.age, person.address];
console.log(objectName, objectAge, objectAddress);

// use spread operator to combine 2 arrays into a new one
const a = [1,2,3];
const b = [4,5,6];
let newArray = [...a,...b];
console.log(newArray);

// ES6 - BTTH
// var x = 10;
// one();
// function one() {
//     var y = 5;
//     two();
//     function two() {
//         var z = 15;
//         three();
//         function three() {
//             var t = x + y + z;
//             console.log(`1. x + y + z = ${t}`); // log value of t is 30
//             four();
//         }
//     }
// }
// function four() {
//     var t = 30;
//     console.log(`2. x = ${x}`); // log value of x is 10
//     console.log(`3. y = ${y}`); // undefined <-- error
//     console.log(`4. z = ${z}`); // undefined <-- will not go here
//     console.log(`5. t = ${t}`); // <-- will not go here
// }

// function fibonacci(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return fibonacci(num-1) + fibonacci(num-2);
//     }
// }

// let input = Number(prompt("input a number"));
// let sumResult = 0;
// for (let i=0; fibonacci(i) < input; i++) {
//     if (fibonacci(i) % 2 ==1) {
//         sumResult += fibonacci(i);
//     }
// }
// console.log(sumResult);

let arr1 = [1,2,3,4,5,6,7,8];
let arr2 = [1,3,3,5,8,9,11];
let arr3 = [12,2,4,6,1];

function array(...arrays) {
    let newArr = arrays.reduce((pre, cur)=> {
        return pre.concat(cur);
    }, []);
    let result = [];
    newArr.forEach((value) => {
        if (!result.includes(value)) {
            result.push(value);
        }
    })
    return result;
}

console.log(array(arr1, arr2, arr3));