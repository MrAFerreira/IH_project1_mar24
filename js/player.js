class Player extends Entity {
  constructor(gameScreen, left, top, width, height, color, hp, speed) {
    super(gameScreen, left, top, width, height, null, hp, speed);
    this.bullets = [];
    this.img = document.createElement("img");
    this.img.src = "../images/pikachu.png";
    this.element.appendChild(this.img);
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    //borderCollision
    if (this.left < 10) {
      this.left = 10;
    }

    if (this.top < 10) {
      this.top = 10;
    }

    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition();
  }
}
