document.addEventListener("DOMContentLoaded", () => {
  scoreDisplay = document.getElementById("score");
  width = 28;
  score = 0;
  grid = document.querySelector(".grid");

  // RANDOM LAYOUT ??(MAP)
  /*
  ARRAY_LENGTH = 200;
  layout = [];
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    layout.push(Math.floor(Math.random() * 2));
  }
  */

  /* function generateMap() {
        let map = [];
        height = Math.floor(Math.random() * (20 - 4) + 4);
        width = Math.floor(Math.random() * (20 - 4) + 4);

        for (let i = 0; i < height; i++) {
          let temp_map = [];
          for (let j = 0; j < width; j++) {
            if (i == 0 || j == width - 1 || i == height - 1 || j == 0)
              temp_map[j] = 0;
            else temp_map[j] = Math.floor(Math.random() * (4 - 0) + 0);
          }
          map[i] = temp_map;
        }
        return map;
      }*/

  layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  // 0 - sushi
  // 1 - wall
  // 2 - ghost-lair
  // 3 - onigiri
  // 4 - empty

  squares = [];

  //create your board (map)
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("sushi");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("onigiri");
      }
    }
  }
  createBoard();

  //Create Characters
  //draw ninjaman onto the board
  let ninjamanCurrentIndex = 489;
  squares[ninjamanCurrentIndex].classList.add("ninja");

  /*
  //draw pumpky on the board
  let pumpkyCurrentIndex = 197;
  squares[pumpkyCurrentIndex].classList.add("pumpky");

  //draw red on the board
  let redCurrentIndex = 197;
  squares[redCurrentIndex].classList.add("red");

  //draw pinky on the board
  let pinkyCurrentIndex = 197;
  squares[pinkyCurrentIndex].classList.add("pinky");

  //draw bluey on the board
  let blueyCurrentIndex = 197;
  squares[blueyCurrentIndex].classList.add("bluey");
  */

  //get the coordinates of pacman or any ghost on the grid with X and Y axis
  function getCoordinates(index) {
    return [index % width, Math.floor(index / width)];
  }

  /* ------------------------------------------------------------------ */
  console.log(getCoordinates(ninjamanCurrentIndex));

  //move ninja
  function moveNinjaman(e) {
    squares[ninjamanCurrentIndex].classList.remove("ninja");
    switch (e.keyCode) {
      // ninja MOVE LEFT
      case 37:
        if (
          ninjamanCurrentIndex % width !== 0 &&
          !squares[ninjamanCurrentIndex - 1].classList.contains("wall") &&
          !squares[ninjamanCurrentIndex - 1].classList.contains("ghost-lair")
        )
          ninjamanCurrentIndex -= 1;
        if (squares[ninjamanCurrentIndex - 1] === squares[363]) {
          ninjamanCurrentIndex = 391;
        }
        break;
      // ninja MOVE UP
      case 38:
        if (
          ninjamanCurrentIndex - width >= 0 &&
          !squares[ninjamanCurrentIndex - width].classList.contains("wall") &&
          !squares[ninjamanCurrentIndex - width].classList.contains(
            "ghost-lair"
          )
        )
          ninjamanCurrentIndex -= width;
        break;
      // ninja MOVE RIGHT
      case 39:
        if (
          ninjamanCurrentIndex % width < width - 1 &&
          !squares[ninjamanCurrentIndex + 1].classList.contains("wall") &&
          !squares[ninjamanCurrentIndex + 1].classList.contains("ghost-lair")
        )
          ninjamanCurrentIndex += 1;
        if (squares[ninjamanCurrentIndex + 1] === squares[392]) {
          ninjamanCurrentIndex = 364;
        }
        break;
      // ninja MOVE DOWN
      case 40:
        if (
          ninjamanCurrentIndex + width < width * width &&
          !squares[ninjamanCurrentIndex + width].classList.contains("wall") &&
          !squares[ninjamanCurrentIndex + width].classList.contains(
            "ghost-lair"
          )
        )
          ninjamanCurrentIndex += width;
        break;
    }
    squares[ninjamanCurrentIndex].classList.add("ninja");
    sushiEaten();
    onigiriEaten();
    checkForGameOver();
    checkForWin();
  }
  document.addEventListener("keyup", moveNinjaman);

  // what happens when you eat a sushi
  function sushiEaten() {
    if (squares[ninjamanCurrentIndex].classList.contains("sushi")) {
      score++;
      scoreDisplay.innerHTML = score;
      squares[ninjamanCurrentIndex].classList.remove("sushi");
    }
  }

  //what happens when you eat a onigiri
  function onigiriEaten() {
    if (squares[ninjamanCurrentIndex].classList.contains("onigiri")) {
      score += 10;
      ghosts.forEach((ghost) => (ghost.isScared = true));
      setTimeout(unScareGhosts, 10000);
      squares[ninjamanCurrentIndex].classList.remove("onigiri");
    }
  }

  //make the ghosts stop flashing
  function unScareGhosts() {
    ghosts.forEach((ghost) => (ghost.isScared = false));
  }

  //create ghosts using Constructors
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.isScared = false;
      this.timerId = NaN;
    }
  }

  //all my ghosts
  ghosts = [
    new Ghost("pumpky", 348, 250),
    new Ghost("pinky", 376, 400),
    new Ghost("red", 351, 300),
    new Ghost("bluey", 379, 500),
  ];

  //draw my ghosts onto the grid

  ghosts.forEach((ghost) => {
    squares[ghost.currentIndex].classList.add(ghost.className);
    squares[ghost.currentIndex].classList.add("ghost");
  });

  //move the Ghosts randomly and chase ninjaman
  ghosts.forEach((ghost) => moveGhost(ghost));

  function moveGhost(ghost) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    /* ---------------------------------------------------------------------- */
    //move red
    /*
    function moveRed() {
      directions = [-1, +1, +width, -width];
      let ghostimerId = NaN;
      let direction = directions[Math.floor(Math.random() * directions.length)];

      ghostimerId = setInterval(function () {
        console.log(redCurrentIndex);
        if (!squares[redCurrentIndex + direction].classList.contains("wall")) {
          //remove the ghosts classes
          squares[redCurrentIndex].classList.remove("red");
          //move into that space

          const [redX, redY] = getCoordinates(redCurrentIndex);
          const [ninjaManX, ninjaManY] = getCoordinates(ninjamanCurrentIndex);
          const [redNextX, redNextY] = getCoordinates(
            redCurrentIndex + direction
          );

          function isXCoordCloser() {
            if (redNextX - ninjaManX > redX - ninjaManX) {
              return true;
            } else return false;
          }

          function isYCoordCloser() {
            if (redNextY - ninjaManY > redY - ninjaManY) {
              return true;
            } else return false;
          }
          if (isXCoordCloser() || isYCoordCloser()) {
            redCurrentIndex += direction;
            squares[redCurrentIndex].classList.add("red");
          } else {
            squares[redCurrentIndex].classList.add("red");
            direction =
              directions[Math.floor(Math.random() * directions.length)];
          }
          squares[redCurrentIndex].classList.add("red");
        } else direction = directions[Math.floor(Math.random() * directions.length)];

        if (squares[redCurrentIndex].classList.contains("ninja"))
          clearInterval(ghostimerId);
      }, 300);
    }
    moveRed();
    sushiEaten();
    onigiriEaten();
    checkForGameOver();
    checkForWin();
    */

    /* ---------------------------------------------------------------------- */
    //move pumpky
    /*
    function movePumpky() {
      directions = [-1, +1, +width, -width];
      let ghostimerId = NaN;
      let direction = directions[Math.floor(Math.random() * directions.length)];

      ghostimerId = setInterval(function () {
        console.log(pumpkyCurrentIndex);
        if (
          !squares[pumpkyCurrentIndex + direction].classList.contains("wall")
        ) {
          //remove the ghosts classes
          squares[pumpkyCurrentIndex].classList.remove("pumpky");
          //move into that space

          [pumpkyX, pumpkyY] = getCoordinates(pumpkyCurrentIndex);
          [ninjaManX, ninjaManY] = getCoordinates(ninjamanCurrentIndex);
          [pumpkyNextX, pumpkyNextY] = getCoordinates(
            pumpkyCurrentIndex + direction
          );

          function isXCoordCloser() {
            if (pumpkyNextX - ninjaManX > pumpkyX - ninjaManX) {
              return true;
            } else return false;
          }

          function isYCoordCloser() {
            if (pumpkyNextY - ninjaManY > pumpkyY - ninjaManY) {
              return true;
            } else return false;
          }
          if (isXCoordCloser() || isYCoordCloser()) {
            pumpkyCurrentIndex += direction;
            squares[pumpkyCurrentIndex].classList.add("pumpky");
          } else {
            squares[pumpkyCurrentIndex].classList.add("pumpky");
            direction =
              directions[Math.floor(Math.random() * directions.length)];
          }
          squares[pumpkyCurrentIndex].classList.add("pumpky");
        } else direction = directions[Math.floor(Math.random() * directions.length)];

        if (squares[pumpkyCurrentIndex].classList.contains("ninja"))
          clearInterval(ghostimerId);
      }, 300);
    }
    movePumpky();
    sushiEaten();
    onigiriEaten();
    checkForGameOver();
    checkForWin();
    */

    /* ---------------------------------------------------------------------- */
    /*
    //move pinky
    function movePinky() {
      directions = [-1, +1, +width, -width];
      let ghostimerId = NaN;
      let direction = directions[Math.floor(Math.random() * directions.length)];

      ghostimerId = setInterval(function () {
        console.log(pinkyCurrentIndex);
        if (
          !squares[pinkyCurrentIndex + direction].classList.contains("wall")
        ) {
          //remove the ghosts classes
          squares[pinkyCurrentIndex].classList.remove("pinky");
          //move into that space

          const [pinkyX, pinkyY] = getCoordinates(pinkyCurrentIndex);
          const [ninjaManX, ninjaManY] = getCoordinates(ninjamanCurrentIndex);
          const [pinkyNextX, pinkyNextY] = getCoordinates(
            pinkyCurrentIndex + direction
          );

          function isXCoordCloser() {
            if (pinkyNextX - ninjaManX > pinkyX - ninjaManX) {
              return true;
            } else return false;
          }

          function isYCoordCloser() {
            if (pinkyNextY - ninjaManY > pinkyY - ninjaManY) {
              return true;
            } else return false;
          }
          if (isXCoordCloser() || isYCoordCloser()) {
            pinkyCurrentIndex += direction;
            squares[pinkyCurrentIndex].classList.add("pinky");
          } else {
            squares[pinkyCurrentIndex].classList.add("pinky");
            direction =
              directions[Math.floor(Math.random() * directions.length)];
          }
          squares[pinkyCurrentIndex].classList.add("pinky");
        } else direction = directions[Math.floor(Math.random() * directions.length)];

        if (squares[pinkyCurrentIndex].classList.contains("ninja"))
          clearInterval(ghostimerId);
      }, 300);
    }
    movePinky();
    sushiEaten();
    onigiriEaten();
    checkForGameOver();
    checkForWin();
    */
    /* ---------------------------------------------------------------------- */
    //move bluey
    /*
    function moveBluey() {
      directions = [-1, +1, +width, -width];
      let ghostimerId = NaN;
      let direction = directions[Math.floor(Math.random() * directions.length)];

      ghostimerId = setInterval(function () {
        console.log(blueyCurrentIndex);
        if (
          !squares[blueyCurrentIndex + direction].classList.contains("wall")
        ) {
          //remove the ghosts classes
          squares[blueyCurrentIndex].classList.remove("bluey");
          //move into that space

          const [blueyX, blueyY] = getCoordinates(blueyCurrentIndex);
          const [ninjaManX, ninjaManY] = getCoordinates(ninjamanCurrentIndex);
          const [blueyNextX, blueyNextY] = getCoordinates(
            blueyCurrentIndex + direction
          );

          function isXCoordCloser() {
            if (blueyNextX - ninjaManX > blueyX - ninjaManX) {
              return true;
            } else return false;
          }

          function isYCoordCloser() {
            if (blueyNextY - ninjaManY > blueyY - ninjaManY) {
              return true;
            } else return false;
          }
          if (isXCoordCloser() || isYCoordCloser()) {
            blueyCurrentIndex += direction;
            squares[blueyCurrentIndex].classList.add("bluey");
          } else {
            squares[blueyCurrentIndex].classList.add("bluey");
            direction =
              directions[Math.floor(Math.random() * directions.length)];
          }
          squares[blueyCurrentIndex].classList.add("bluey");
        } else direction = directions[Math.floor(Math.random() * directions.length)];

        if (squares[blueyCurrentIndex].classList.contains("ninja"))
          clearInterval(ghostimerId);
      }, 300);
    }
    moveBluey();
    sushiEaten();
    onigiriEaten();
    checkForGameOver();
    checkForWin();
    */

    ghost.timerId = setInterval(function () {
      //if the next square your ghost is going to go to does not have a ghost and does not have a wall
      if (
        !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
        !squares[ghost.currentIndex + direction].classList.contains("wall")
      ) {
        //remove the ghosts classes
        squares[ghost.currentIndex].classList.remove(ghost.className);
        squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
        //move into that space
        ghost.currentIndex += direction;
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
        //else find a new random direction ot go in
      } else direction = directions[Math.floor(Math.random() * directions.length)];

      //if the ghost is currently scared
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add("scared-ghost");
      }

      //if the ghost is currently scared and pacman is on it
      if (
        ghost.isScared &&
        squares[ghost.currentIndex].classList.contains("ninja")
      ) {
        squares[ghost.currentIndex].classList.remove(
          ghost.className,
          "ghost",
          "scared-ghost"
        );
        ghost.currentIndex = ghost.startIndex;
        score += 100;
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
      }
      checkForGameOver();
    }, ghost.speed);
  }

  //check for a game over
  function checkForGameOver() {
    if (
      squares[ninjamanCurrentIndex].classList.contains("ghost") &&
      !squares[ninjamanCurrentIndex].classList.contains("scared-ghost")
    ) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", moveNinjaman);
      setTimeout(function () {
        alert("Game Over");
      }, 500);
    }
  }

  //check for a win - more is when this score is reached
  function checkForWin() {
    if (score === 274) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", moveNinjaman);
      setTimeout(function () {
        alert("You have WON!");
      }, 500);
    }
  }
});
