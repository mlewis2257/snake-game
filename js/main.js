/*----- constants -----*/
const gridWidth = 30;
const gridHeight = 30;
const SNAKE_SPEED = 1;

/*----- state variables -----*/
let score, snake, food, direction, board, winner;
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
    this.color = "green";
    this.collision = false;
  }

  move() {
    switch (this.direction) {
      case "left":
        if (this.body[0].x === 0) {
          this.collision = true;
          break;
        }
        board[this.body[0].x][this.body[0].y] = 0;
        this.body[0].x -= 1;
        board[this.body[0].x][this.body[0].y] = this;
        break;
      case "right":
        if (this.body[0].x === 30) {
          this.collision = true;
          break;
        }
        console.log(this.collision);
        board[this.body[0].x][this.body[0].y] = 0;
        this.body[0].x += 1;
        board[this.body[0].x][this.body[0].y] = this;
        break;
      case "down":
        board[this.body[0].x][this.body[0].y] = 0;
        this.body[0].y += 1;
        board[this.body[0].x][this.body[0].y] = this;
        break;
      case "up":
        board[this.body[0].x][this.body[0].y] = 0;
        this.body[0].y -= 1;
        board[this.body[0].x][this.body[0].y] = this;
        break;
    }
  }

  // collisionChecker() {
  //   if (this.head.y > 30 || this.head.y < 0) {
  //     console.log("game over, you lost!");
  //   }
  //   if (this.head.x > 30 || this.head.x < 0) {
  //     console.log("game over, you lost!");
  //   }
  // }
  renderSnake() {
    const snakeEl = document.createElement("div");
    snakeEl.classList.add("snake");
    snakeEl.style.gridColumnStart = this.body[0].x;
    snakeEl.style.gridRowStart = this.body[0].y;
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
      snake.direction = "left";
      // newHead.x -= 1;
      break;
    case "d":
      console.log("going right");
      snake.direction = "right";
      // newHead.x += 1;
      break;
    case "w":
      console.log("going up");
      snake.direction = "up";
      // newHead.y -= 1;
      break;
    case "s":
      console.log("going down");
      snake.direction = "down";
      // newHead.y += 1;
      break;
  }
  console.log(snake.direction);
});

/*----- functions -----*/
/**Potential Game loop that I can use to constantly make requests to the screeen
 * Can also setTimeout loop to render born.
 */

const init = () => {
  score = 0;
  board = buildBoard();
  snake = new Snake();
  food = new Food();
  board[snake.body[0].y][snake.body[0].x] = snake;
  board[food.body[0].y][food.body[0].x] = food;
  winner = null;
  startGame();
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
      cellEl.style.backgroundColor = "black";
      gridDiv.appendChild(cellEl);
    });
  });
};

const startGame = () => {
  const gameTimer = setInterval(function () {
    snake.move();
    if (snake.collision) {
      clearInterval(gameTimer);
    }
    if (
      snake.body[0].x === food.body[0].x &&
      snake.body[0].y === food.body[0].y
    ) {
      winner = "Winner";
    }
    if (
      snake.body[0].x < 0 ||
      snake.body[0].x > 30 ||
      snake.body[0].y < 0 ||
      snake.body[0].y > 30
    ) {
      winner = "Lost";
    }
    if (winner === "Winner" || winner === "Lost") {
      clearInterval(gameTimer);
      alert(winner);
    }
    render();
  }, 500);
};

const render = () => {
  renderBoard();
  snake.renderSnake();
  food.renderFood();
};

init();
