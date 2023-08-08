/*----- constants -----*/
const gridWidth = 30;
const gridHeight = 30;

/*----- state variables -----*/
let score, snake, food, direction, board;
let currentIdx = 0;
let foodIdx = 0;
// Classes
class Snake {
  constructor() {
    this.direction = "up";
  }
}

/*----- cached elements  -----*/
const gridDiv = document.getElementById("board");
// const gridDiv = document.getElementById("game_grid");
/*----- event listeners -----*/

/*----- functions -----*/

const init = () => {
  score = 0;
  board = buildBoard();
};

const buildBoard = () => {
  const newBoard = [];
  for (let i = 0; i < gridHeight; i++) {
    let row = [];
    for (let j = 0; j < gridWidth; j++) {
      row.push(null);
    }
    newBoard.push(row);
  }
  return newBoard;
};

const renderGrid = () => {
  for (let i = 0; i < 600; i++) {
    let gridPattern = document.createElement("div");
    gridPattern.classList.add("gridPattern");
    gridDiv.appendChild(gridPattern);
    gridPattern.style.width = `${gridWidth}px`;
    gridPattern.style.height = `${gridHeight}px`;
  }
};

const renderSnake = () => {};
const renderFood = () => {
  // Render the food randomly within the grid
  // Check to if
};

const moveSnake = () => {
  // Will move through array of divs
  // Keep track of Head/Tail
  // Head will be snake[0]
  // Tail will equal snake.pop()
  // Snake
};
// const iterateDivs = () => {
//   const childDivs = document.querySelectorAll("#game_grid > div");
//   console.log(childDivs);
// };

const render = () => {
  renderGrid();
  createArr();
};

init();
