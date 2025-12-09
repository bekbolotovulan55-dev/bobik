const parent = document.querySelector('.parent_block');
const child = document.querySelector('.child_block');

let x = 0;
let y = 0;

let maxX = parent.clientWidth - child.offsetWidth;
let maxY = parent.clientHeight - child.offsetHeight;

function move() {
    if (y === 0 && x < maxX) {
        x++;
    }
    else if (x === maxX && y < maxY) {
        y++;
    }
    else if (y === maxY && x > 0) {
        x--;
    }
    else if (x === 0 && y > 0) {
        y--;
    }

    child.style.left = x + 'px';
    child.style.top = y + 'px';
    requestAnimationFrame(move);
}
move();


let timer = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;

function updateTime() {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    timer.textContent = 
        mins.toString().padStart(2, "0") + ":" +
        secs.toString().padStart(2, "0");
}

startBtn.addEventListener("click", () => {
    if (interval !== null) return;

    interval = setInterval(() => {
        seconds++;
        updateTime();
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    updateTime();
});

