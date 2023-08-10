/*----- constants -----*/
const gridWidth = 30;
const gridHeight = 30;
const SNAKE_SPEED = 1;

/*----- state variables -----*/
let score, snake, food, direction, board;
let currentIdx = 0;
let foodIdx = 0;
let lastRenderTime = 0;
// Classes
class Snake {
  constructor() {
    this.direction = "up";
    this.body = [
      {
        x: 14,
        y: 14,
      },
    ];
    this.head = { ...this.body[0] };
    this.tail = { ...this.body[this.body.length - 1] };
    this.length = 1;
    this.color = "green";
  }

  changeDirection(newDirection) {
    if (
      (newDirection === "left" && this.direction !== "right") ||
      (newDirection === "right" && this.direction !== "left") ||
      (newDirection === "down" && this.direction !== "up") ||
      (newDirection === "up" && this.direction !== "down")
    ) {
      this.direction = newDirection;
      return newDirection;
    }
  }
  move() {
    let newHead = this.head;

    switch (this.direction) {
      case "left":
        newHead.x -= 1;
        break;
      case "right":
        newHead.x += 1;
        break;
      case "up":
        newHead.y -= 1;
        break;
      case "down":
        newHead.y += 1;
        break;
    }
    return newHead;
  }
  eatFood() {}
  grow() {
    this.body.push(this.tail);
    this.length++;
  }
}

/*----- cached elements  -----*/
const gridDiv = document.getElementById("board");

/*----- event listeners -----*/

/*----- functions -----*/
const update = () => {};
const main = (currentTime) => {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  console.log("render");
  lastRenderTime = currentTime;
};

// window.requestAnimationFrame(main);

const init = () => {
  score = 0;
  board = buildBoard();
  snake = new Snake();
  food = 1;
  direction = snake.direction;
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
  board.forEach((colArr, colIdx) => {
    console.log(colArr, colIdx);
    colArr.forEach((cell, rowIdx) => {});
  });
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

const render = () => {
  renderGrid();
  createArr();
};

init();
