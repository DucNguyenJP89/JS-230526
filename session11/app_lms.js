function joinString() {
    let myString = ["Lion", "Tiger", "Wolf", "Kangaroo"];
    console.log(`The result is ${myString.join(',')}`);
}

function inputDashes() {
    let input = prompt("Enter your number");
    result = [input[0]];
    for (let i = 1; i < input.length; i++) {
        if (input[i - 1] % 2 === 0 && input[i] % 2 === 0) {
            result.push('-', input[i]);
        } else {
            result.push(input[i]);
        }
    }
    console.log(result.join(''));
}

function isUpperCase(value) {
    let test = /[A-Z]/;
    if (test.test(value)) {
        return value.toLowerCase();
    } else {
        return value.toUpperCase();
    }
}

function upperAndLower() {
    let input = prompt("Enter your string").split(" ");
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let checkStr = input[i].split("");
        let check = checkStr.map(isUpperCase);
        result.push(check.join(""));
    }
    console.log(result.join(" "));
}

function search(keyword) {
    console.log(keyword);
    let english = ["japan", "vietnam", "cat", "dog", "chair", "table"];
    let vietnamese = ["Nhật Bản", "Việt Nam", "Con mèo", "Con chó", "Cái ghế", "Cái bàn"];
    let searchKw = keyword.toLowerCase();
    let index = english.indexOf(searchKw);
    if (index !== -1) {
        let result = vietnamese[index];
        console.log(`The translation for ${keyword} is ${result}`);
    } else {
        console.log("No match found. Please try again.");
    }
}

function primeNumber() {
    let input = prompt("Enter your array of numbers").split(",");
    let arr = input.map(str => {
        return Number(str);
    })
    let primeNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 2) {
            console.log("Not prime number", arr[i]);
        } else {
            let isPrime = true;
            for (let j = 2; j < arr[i]; j++) {
                if (arr[i]%j == 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                primeNumber.push(arr[i]);
            } 
        }   
    }
    console.log(primeNumber);
}