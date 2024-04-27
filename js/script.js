window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game = null;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game();
    player = new Player(
      game.gameScreen,
      game.width / 2 - 25,
      game.height / 2 - 25,
      20,
      20,
      "red",
      10,
      4
    );
    game.player = player;
    game.start();
  }

  function handleKeyDown(event) {
    const key = event.key;
    const possibleKeys = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "a",
      "w",
      "s",
      "d",
    ];

    if (possibleKeys.includes(key)) {
      event.preventDefault();

      let { left, top, width, height } = game.player;
      left += width / 2;
      top += height / 2;

      switch (key) {
        case "a":
          game.player.directionX = -game.player.speed;
          game.player.direction = "left";
          break;
        case "d":
          game.player.directionX = game.player.speed;
          game.player.direction = "right";

          break;
        case "s":
          game.player.directionY = game.player.speed;
          game.player.direction = "down";

          break;
        case "w":
          game.player.directionY = -game.player.speed;
          game.player.direction = "up";

          break;
        case "ArrowLeft":
          game.player.bullets.push(
            new Bullet(game.gameScreen, left, top, "left", "yellow", 4)
          );
          break;
        case "ArrowRight":
          game.player.bullets.push(
            new Bullet(game.gameScreen, left, top, "right", "yellow", 4)
          );
          break;
        case "ArrowUp":
          game.player.bullets.push(
            new Bullet(game.gameScreen, left, top, "up", "yellow", 4)
          );
          break;
        case "ArrowDown":
          game.player.bullets.push(
            new Bullet(game.gameScreen, left, top, "down", "yellow", 4)
          );
          break;
      }
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  window.addEventListener("keyup", () => {
    game.player.directionX = 0;
    game.player.directionY = 0;
  });
};
