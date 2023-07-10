function displayTime() {
    let clockElement = document.getElementById('clock');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hours + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    clockElement.innerText = time;

    if (seconds === 0) {
        if (minutes % 1 === 0) {
            changeBackgroundColor();
        }
    }
}

function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}

setInterval(displayTime, 1000);

function changeBackgroundColor() {
    console.log("Changing background color...");
    let bodyElement = document.querySelector("body");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    bodyElement.style.backgroundColor = `rgb(${r},${g},${b})`;
}

