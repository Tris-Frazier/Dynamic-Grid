let position = 1; // The starting position of the grid
const gridSize = 100; // The total number of the grid cells

function createGrid() {
  for(let i = 1; i <= gridSize; i++){
    var divElement = document.createElement("div");
    var text = document.createTextNode(`${i}`);
    divElement.appendChild(text);
    divElement.setAttribute("id", `n${i}`);
    document.getElementById('target').appendChild(divElement);
  }
}

function move() {
    setTimeout(() => {
      toggle(position);
      toggle(position-1);
      move();
      position++;
    }, 100);
}

function toggle(position) {
  if(position < 1) {return 0}
  else { 
    let element = document.getElementById(`n${position}`);
    element.classList.toggle('on');
  }
}

if (typeof module !== 'undefined') {
  module.exports = { createGrid, move, toggle };
}
