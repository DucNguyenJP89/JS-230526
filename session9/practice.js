function countTo100() {
    for (let i = 1; i < 101; i++) {
        document.write(`Count: ${i} <br>`);
        if (i == 99) {
            alert("Mission completed!");
        }
    }
}

function fibonacciNumber() {
    let f1 = 1;
    let f2 = 1;
    document.write(`${f1} ${f2} `);
    for (let i = 0; i < 18; i++) {
        let sum = f1 + f2;
        f1 = f2;
        f2 = sum;
        document.write(`${sum} `);
    }
}

function fibonacciToFive() {
    let f1=1;
    let f2=1;
    not_dividable = true;
    while (not_dividable) {
        let sum = f1+f2;
        if (sum % 5 == 0) {
            document.write(`The first fibonacci number that dividable to 5 is ${sum}`);
            not_dividable = false;
        } else {
            f1 = f2;
            f2 = sum;
        }
    }
}

function sumOf20FibonacciNums() {
    let f1=1;
    let f2=1;
    let total = f1+f2;
    for (let i = 0; i < 18; i++) {
        let sum = f1 + f2;
        total += sum;
        f1 = f2;
        f2 = sum;
    }
    alert(`Sum of the first 20 fibonacci numbers is: ${total}`);
}

function sumOfNumbersToSeven() {
    let i = 0;
    let total = 0;
    let count = 0;
    while (count < 30) {
        i += 7;
        console.log(i);
        total += i;
        count += 1;
    }
    alert(`Sum of 30 numbers that dividable to 7 is: ${total}`);
}

function fizzBuzz() {
    for (i=1; i<101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function numberFactorial() {
    let number = Number(prompt("Enter a number"));
    if (!Number.isInteger(number) || number < 0) {
        alert("Number must be an positive integer");
    } else if (number==1 || number==0) {
        alert("The result is 1");
    } else {
        let result = number;
        for (let i=number-1; i>1; i--) {
            result *= i;
        }
        alert(`The result ${result}`);
    }    
}