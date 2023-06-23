function joinString() {
    let array = ["Hello", "Rikkei", "Academy"];
    console.log(array.join(' '));
}

function reverseAndJoinString() {
    let array = ["Academy", "Rikkei", "Chao", "Xin"];
    array.reverse();
    console.log(array.join(' '));
}

function deleteBySplice() {
    let array = ["Hello","World", "Rikkei", "Academy"];
    array.splice(1, 1);
    console.log(array.join(' '));
}

function deleteByShift() {
    let array = ["Hello","World", "Rikkei", "Academy"];
    let Hello = array.shift();
    array.shift();
    array.unshift(Hello);
    console.log(array.join(' '));
}

function arraySum() {
    let array = [1,2,3,4,5];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(`Tong cac phan tu la: ${sum}`);
}

function sumOfInput() {
    let input = prompt("Input your array").split(",");
    let array = input.map(str => {
        return Number(str);
    });
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (i % 2 == 0) {
            sumOfEven += number;
        } else {
            sumOfOdd += number;
        }
    }
    console.log(`Sum of values at even indexes is: ${sumOfEven}
    Sum of values at odd indexes is: ${sumOfOdd}`);
}

function numberSort(a,b) {
    return a-b;
}

function minAndMax() {
    let input = prompt("Input your array").split(",");
    let array = input.map(str => {
        return Number(str);
    });
    array.sort(numberSort);
    let min = array[0];
    let max = array[array.length-1];
    console.log(array);
    console.log(`Min value is ${min} and max value is ${max}`);
}

function sortUsingSort() {
    let input = prompt("Input your array").split(",");
    let array = input.map(str => {
        return Number(str);
    });
    console.log(array);
    array.sort(numberSort);
    console.log(`New sorted array: ${array}`);
}

function sortWithoutSort() {
    let input = prompt("Input your array").split(",");
    let a = input.map(str => {
        return Number(str);
    })
    console.log(a);
    for (let i=0; i<a.length; i++) {
        for (let j=i+1; j<a.length; j++) {
            if (a[i] > a[j]) {
                let tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
    console.log(`New sorted array: ${a}`);
}

function mostFrequent() {
    let a = prompt("Input your array").split(",");
    let maxCount = 0;
    let targetNum;
    let len = a.length;
    for (let i=0; i<len; i++) {
        let count = 0;
        for (let j=i; j<len; j++) {
            if (a[i] === a[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            targetNum = a[i];
        }
        console.log(targetNum);
    }
    console.log(`The most frequent value is ${targetNum}`);
}

function todoList() {
    let list = ["Go to school at 7pm", "Read book at 12 am"];
    let state = true;
    while (state) {
        let userInput = prompt("What do you want to do?");
        switch (userInput) {
            case 'C':
                let newTask = prompt("Enter new task");
                list.push(newTask);
                console.log(`Current todo list: ${list.join(', ')}`);
                break;
            case 'R':
                console.log(`Current todo list: ${list.join(', ')}`);
                break;
            case 'U':
                let position = Number(prompt("Where do you want to update?"));
                let updatedTask = prompt("Input the updated content");
                list[position] = updatedTask;
                console.log(`Current todo list: ${list.join(', ')}`);
                break;
            case 'D':
                let deletePosition = Number(prompt("Where do you want to delete?"));
                if (deletePosition >= list.length) {
                    alert(`Please input number smaller than ${list.length}`);
                } else {
                    list.splice(deletePosition, 1);
                    console.log(`Current todo list: ${list.join(', ')}`);
                }
                break;
            case 'E':
                console.log("You exited Todo List");
                state = false;
                break;
            default:
                alert("Please input only CRUDE");
        }
    }
}