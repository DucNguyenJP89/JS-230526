function isPositiveInteger() {
    let input = Number(prompt("Input a number"));
    let result = Number.isInteger(input) && input > 0;
    console.log(result);
} 

function isSum10() {
    let arr=[1,2,3,4,5,6,7,8,9,10];
    let result = [];
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] + arr[j] == 10) {
                result.push([arr[i], arr[j]]);
                // arr.splice(i, 1);
                // arr.splice(j-1, 1);
                // console.log(arr);
            }
        }
    }
    console.log(result);
}

function countCharacters() {
    let strArr = prompt("Please input a string").toLowerCase();
    let check= [];
    for (let i=0; i<strArr.length; i++) {
        if (check[strArr[i]]) {
            check[strArr[i]] += 1;
        } else {
            check[strArr[i]] = 1;
        }
    }
    for (item in check) {
        console.log(`Character ${item} appears ${check[item]} times`);
    }
}

function convertText() {
    let str = prompt("Input a string");
    newStr = str.toLowerCase().split('');
    newStr[0] = newStr[0].toUpperCase();
    console.log(newStr.join(''));
}

function cutString() {
    let str = prompt("Input a string");
    if (str.length <= 10) {
        console.log(str);
    } else {
        let result = str.substring(0, 10);
        console.log(result + "...");
    }
}