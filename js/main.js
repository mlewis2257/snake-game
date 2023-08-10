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
class Food {
  constructor() {
    this.body = [
      {
        x: 8,
        y: 15,
      },
    ];
  }
  changeLocation() {
    let newLocation = this.body;
    let changeFoodX = Math.floor(Math.random() * 30);
    let changeFoodY = Math.floor(Math.random() * 30);

    newLocation[0].x = changeFoodX;
    newLocation[0].y = changeFoodY;
    this.body = newLocation;
    console.log(this.body);
  }
  renderFood() {
    const foodEl = document.createElement("div");
    console.log(this.body[0].x);
    foodEl.classList.add("food");
    foodEl.style.gridColumnStart = this.body[0].x;
    foodEl.style.gridRowStart = this.body[0].y;
    gridDiv.appendChild(foodEl);
  }
}

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
    let keypress = document.addEventListener(
      "keydown",
      this.OnEvent.bind(this)
    );
    switch (keypress) {
      case "ArrowLeft":
        console.log("going left");
        snake.changeDirection("left");
        newHead.x -= 1;
        break;
      case "ArrowRight":
        console.log("going right");
        snake.changeDirection("right");
        newHead.x += 1;
        break;
      case "ArrowUp":
        console.log("going up");
        snake.changeDirection("up");
        newHead.y -= 1;
        break;
      case "ArrowDown":
        console.log("going down");
        snake.changeDirection("down");
        newHead.y += 1;
        break;
    }
    this.body.unshift(newHead);
    this.body;
    return newHead;
  }
  checkFoodEaten() {}
  grow() {
    this.body.push(this.tail);
    this.length++;
  }
  collisionChecker() {
    if (this.head.y > 30 || this.head.y < 0) {
      console.log("game over, you lost!");
    }
    if (this.head.x > 30 || this.head.x < 0) {
      console.log("game over, you lost!");
    }
  }
  renderSnake() {
    const snakeEl = document.createElement("div");
    snakeEl.classList.add("snake");
    snakeEl.style.gridColumnStart = this.head.x;
    snakeEl.style.gridRowStart = this.head.x;
    gridDiv.appendChild(snakeEl);
  }
}

/*----- cached elements  -----*/
const gridDiv = document.getElementById("board");

/*----- event listeners -----*/
window.addEventListener("keydown", (evt) => {
  switch (evt.key) {
    case "a":
      console.log("going left");
      snake.changeDirection("left");
      // newHead.x -= 1;
      break;
    case "d":
      console.log("going right");
      snake.changeDirection("right");
      // newHead.x += 1;
      break;
    case "w":
      console.log("going up");
      snake.changeDirection("up");
      // newHead.y -= 1;
      break;
    case "s":
      console.log("going down");
      snake.changeDirection("down");
      // newHead.y += 1;
      break;
  }
  console.log(snake.direction);
});

/*----- functions -----*/
/**Potential Game loop that I can use to constantly make requests to the screeen
 * Can also setTimeout loop to render born.
 */
const main = (currentTime) => {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
};

// window.requestAnimationFrame(main);

const init = () => {
  score = 0;
  board = buildBoard();
  snake = new Snake();
  food = new Food();
  direction = snake.direction;
  render();
};

const buildBoard = () => {
  const newBoard = [];
  for (let i = 0; i < gridHeight; i++) {
    let row = [];
    for (let j = 0; j < gridWidth; j++) {
      row.push(0);
    }
    newBoard.push(row);
  }
  return newBoard;
};

const renderBoard = () => {
  gridDiv.innerHTML = "";

  board.forEach((colArr, colIdx) => {
    colArr.forEach((cell, rowIdx) => {
      const cellEl = document.createElement("div");
      cellEl.style.gridRowStart = rowIdx + 1;
      cellEl.style.gridColumnStart = colIdx + 1;
      if (rowIdx === snake.body[0].x && colIdx === snake.body[0].y) {
        cellEl.classList.add("snake");
      } else if (rowIdx === food.body[0].x && colIdx === food.body[0].x) {
        cellEl.classList.add("food");
      }
      cellEl.style.backgroundColor = "black";
      gridDiv.appendChild(cellEl);
    });
  });
};

const renderSnake = () => {
  snake.renderSnake();
};
const renderFood = () => {
  // Render the food randomly within the grid
  food.renderFood();
  food.changeLocation();
};

const moveSnake = () => {};

const render = () => {
  renderBoard();
  renderSnake();
  renderFood();
  console.log(snake.body);
};

init();
