const child_block = document.querySelector(".child_block");
let pos = 0;

function move() {
  if (pos < 450) { 
    pos++;
    child_block.style.left = pos + "px";
    requestAnimationFrame(move);
  }
}

move();