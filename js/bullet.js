class Bullet extends Entity {
  constructor(gameScreen, left, top, direction, color, speed) {
    super(gameScreen, left, top, 10, 10, "yellow", 1, 2);
    this.direction = direction;

    switch (direction) {
      case "down":
        this.directionY = speed;
        break;
      case "up":
        this.directionY = -speed;
        break;
      case "left":
        this.directionX = -speed;
        break;
      case "right":
        this.directionX = speed;
        break;
    }
    console.log(this.directionX, this.directionY);
  }

  checkIfOutside() {
    if (
      this.top > this.gameScreen.height ||
      this.top + this.height < 0 ||
      this.left < 0 ||
      this.left + this.width > this.gameScreen.width
    ) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    this.updatePosition();
  }
}
