// let input = Number(prompt("Input your birth month"));
// switch (input) {
//     case 1:
//     case 2:
//     case 3:
//         alert("You were born in Spring");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         alert("You were born in Summer");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         alert("You were born in Autumn");
//         break;
//     case 10:
//     case 11:
//     case 12:
//         alert("You were born in Winter");
//         break;
//     default:
//         alert("Please enter a valid month!");
//         break;
// }

// if (input <= 3 ) {
//     alert("You were born in Spring");
// } else if (4 <= input && input <= 6) {
//     alert("You were born in Summer");
// } else if (7 <= input && input <= 9) {
//     alert("You were born in Autumn");
// } else if (10 <= input && input <= 12) {
//     alert("You were born in Winter");
// } else {
//     alert("Please enter a valid month");
// }

// for (let index=0; index < 10; index++) {
//     document.write("Count:" + index + "<br>");
// }
// let a = 32;
// let state = true;
// while (state) {
//     let input = Number(prompt("Enter your guess"));
//     if (input > 32) {
//         alert("Smaller!");
//     } else if (input < 32) {
//         alert("Bigger");
//     } else {
//         alert("BINGO!");
//         state = false;
//     }
// }

let number1=0;
let number2=1;
let nextNumber;
for (let i=0;i<20;i++) {
    nextNumber = number1+number2;
    number1 = number2;
    number2= nextNumber;
    console.log(number1);
}