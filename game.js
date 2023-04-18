//Hello 
function main() {
  return 'Hello, World!';
}

main();

// Tetris game using arrow keys for movement

// Variables
var canvas;
var ctx;
var grid;
var score = 0;
var shapes = [
  [[[1, 1, 1, 1]]],
  [[[1, 1, 0], [0, 1, 1]]],
  [[[0, 1, 1], [1, 1, 0]]],
  [[[1, 1], [1, 1]]],
  [[[0, 1, 0], [1, 1, 1]]],
  [[[1, 0, 0], [1, 1, 1]]],
  [[[0, 0, 1], [1, 1, 1]]]
];
var currentShape = {
  shape: null,
  x: null,
  y: null,
  rotation: null
};
var intervalId = null;

// Initialize game grid
function initGrid() {
  grid = [];
  for (var i = 0; i < 20; i++) {
    grid[i] = [];
    for (var j = 0; j < 10; j++) {
      grid[i][j] = null;
    }
  }
}

// Initialize canvas
function initCanvas() {
  canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');
}

// Draw grid
function drawGrid() {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        ctx.fillStyle = 'gray';
        ctx.fillRect(j * 30, i * 30, 30, 30);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(j * 30, i * 30, 30, 30);
      } else {
        ctx.clearRect(j * 30, i * 30, 30, 30);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(j * 30, i * 30, 30, 30);
      }
    }
  }
}

// Render current shape
function renderShape() {
  var shape = currentShape.shape[currentShape.rotation];
  for (var i = 0; i < shape.length; i++) {
    for (var j = 0; j < shape[i].length; j++) {
      if (shape[i][j]) {
        ctx.fillStyle = 'gray';
        ctx.fillRect((j + currentShape.x) * 30, (i + currentShape.y) * 30, 30, 30);
        ctx.strokeStyle = 'black';
        ctx.strokeRect((j + currentShape.x) * 30, (i + currentShape.y) * 30, 30, 30);
      }
    }
  }
}

// Move shape down
function moveDown() {
  currentShape.y++;
  if (isCollision()) {
    currentShape.y--;
    mergeShape();
    addShape();
    clearLines();
  }
}

// Move shape left
function moveLeft() {
  currentShape.x--;
  if (isCollision()) {
    currentShape.x++;
  }
}

// Move shape right
function moveRight() {
  currentShape.x++;
  if (isCollision()) {
    currentShape.x--;
  }
}
// Rotate shape
function rotate() {
  currentShape.rotation = (currentShape.rotation + 1) % currentShape.shape.length;
  if (isValidPosition(currentShape)) {
  render();
  } else {
  currentShape.rotation = (currentShape.rotation - 1 + currentShape.shape.length) % currentShape.shape.length;
  }
  // Check if game is over
function isGameOver() {
  for (let i = 0; i < gameArea[0].length; i++) {
    if (gameArea[0][i] !== 0) {
      return true;
    }
  }
  return false;
}
//Keys
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    move(-1);
  }
});
//keys
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    move(-1);
  } else if (event.code === "ArrowRight") {
    move(1);
  }
});
//keys 
document.addEventListener("keydown", function (event) {
  moveShape(event.keyCode);
});
//keys
function moveShape(keyCode) {
  switch (keyCode) {
    case 87: // "w"
      currentShape.direction = "up";
      break;
    case 65: // "a"
      currentShape.direction = "left";
      break;
    case 83: // "s"
      currentShape.direction = "down";
      break;
    case 68: // "d"
      currentShape.direction = "right";
      break;
  }
}

// Game loop
function gameLoop() {
  clearCanvas();
  drawShape(currentShape);
  drawGameArea();

  if (frames % speed === 0) {
    moveShapeDown();
  }

  if (isGameOver()) {
    clearInterval(gameInterval);
    alert("Game over!");
  }

  frames++;
}

// Start game
const gameInterval = setInterval(gameLoop, 1000 / 60);

function gameLoop() {
  update();
  draw();
}

function update() {
  // Update game logic
}

function draw() {
  // Draw game state
}