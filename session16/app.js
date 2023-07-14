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
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    let background = document.getElementById('task2');
    background.style.backgroundColor = color;
}

// js for bai 3
let fontSize = 16;
function changeText() {
    let text = document.getElementById('task3-text');
    text.style.fontSize = `${fontSize}px`;
    text.style.color = 'black';
    fontSize+=2;
    if (text.style.fontSize == "40px") {
        text.style.color = "red";
        fontSize = 16;
    } 
}

// js for bai 4 - Todo List
function addTask() {
    let task = document.getElementById('task4-input');
    let newTask = document.createElement('li');
    let taskNode = task.value;
    newTask.innerText = taskNode;
    console.log(newTask);
    let list = document.getElementById('task4-list');
    list.appendChild(newTask);
    task.value = "";
}