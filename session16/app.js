// js for bai 1
let task1Text = document.getElementById('task1-text');
function controlText() {
    let buttonLabel = document.getElementById('task1-btn');
    if (task1Text.style.display == 'none') {
        task1Text.style.display = 'block';
        buttonLabel.innerText = 'Hide text';
    } else {
        task1Text.style.display = 'none';
        buttonLabel.innerText = 'Show text';
    }
}

// js for bai 2
function changeBackgroundColor() {
    let color = prompt("input your favorite color");
    let background = document.getElementById('task2');
    background.style.backgroundColor = color;
}

// js for bai 3
function changeText() {
    let text = document.getElementById('task3-text');
    text.style.fontSize = "40px";
    text.style.color = "red";
}

// js for bai 4 - Todo List
function addTask() {
    let task = document.getElementById('task4-input');
    let newTask = `<li>${task.value}</li>`;
    let list = document.getElementById('task4-list');
    list.innerHTML += newTask;
    task.value = "";
}