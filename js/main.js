/*----- constants -----*/
const gridDiv = document.getElementById("game_grid");

/*----- state variables -----*/
let board, score, snake, food, direction;
/*----- cached elements  -----*/

// const gridDiv = document.getElementById("game_grid");
/*----- event listeners -----*/

/*----- functions -----*/
const renderGrid = () => {
  for (let i = 0; i < 440; i++) {
    let gridPattern = document.createElement("div");
    gridPattern.classList.add("gridPattern");
    gridDiv.appendChild(gridPattern);
  }
};

const render = () => {
  renderGrid();
};
const init = () => {
  render();
};

init();
