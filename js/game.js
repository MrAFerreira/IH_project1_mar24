class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = null;
    this.height = 800;
    this.width = 800;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.floor(1000 / 60);
  }

  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.startScreen.style.display = "none";

    this.gameScreen.style.display = "block";

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    this.player.move();

    this.updateObstacles();
    this.updateBullets();
    if (this.lives === 0) {
      this.endGame();
    }

    /* if(Math.random() > 0.9 && this.obstacles.length <1) {
          this.obstacles.push(new Obstacle(this.gameScreen))
      } */
  }

  updateObstacles() {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];

      //moving the obstacle
      obstacle.move();
      // check for collision
      if (this.player.didCollide(obstacle)) {
        // remove the html element
        obstacle.element.remove();
        //this.obstacles = ["obstacle", "obstacle", "obstacle"]
        //remove from the array
        this.obstacles.splice(i, 1);
        this.lives--;
        // update the counter so we account for the removed obstacle
        i--;
      } else if (obstacle.top > this.height) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.score++;
        // update the counter so we account for the removed obstacle
        i--;
      }
    }
  }

  updateBullets() {
    for (let i = 0; i < this.player.bullets.length; i++) {
      const bullet = this.player.bullets[i];

      //moving the obstacle
      bullet.move();
      // check for collision
      /* if(this.player.didCollide(bullet)){
          // remove the html element
          bullet.element.remove()
          //this.player.bullets. = ["bullet", "bullet", "bullet"]
          //remove from the array
          this.player.bullets.splice(i,1)
          // update the counter so we account for the removed bullet
          i--
      }  */
      if (bullet.checkIfOutside()) {
        bullet.element.remove();
        this.player.bullets.splice(i, 1);
        // update the counter so we account for the removed obstacle
        i--;
      }
    }
  }

  endGame() {
    //remove elements from the dom
    this.player.element.remove();
    this.obstacles.forEach(obstacle => obstacle.element.remove());
    this.obstacles = [];

    //stop the engine
    this.gameIsOver = true;

    //Hide the gameScreen
    this.gameScreen.style.display = "none";
    //show the end game screen
    this.gameEndScreen.style.display = "block";
  }
}
