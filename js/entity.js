class Entity {
  constructor(gameScreen, left, top, width, height, color, hp, speed) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.hp = hp;
    this.speed = speed;
    this.direction = "down";

    this.element = document.createElement("div");

    this.element.style.backgroundColor = color;
    this.element.style.position = "absolute";

    //size of the player
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    // Position the player
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left += this.directionX * this.speed;
    this.top += this.directionY * this.speed;

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
