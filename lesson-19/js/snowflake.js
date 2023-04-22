class Snowflake {
  constructor(element) {
    this.element = element;
    this.x = Math.random() * window.innerWidth;
    this.y = 0;
    this.maxSpeed = 50;
    this.speed = Math.random() * this.maxSpeed;
  }

  play() {
    this.y += this.speed;
    if (this.y > window.innerHeight) {
      this.y = 0;
      this.x = Math.random() * window.innerWidth;
      this.speed = Math.random() * this.maxSpeed;
    }
    this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}
let snowflakes = document.querySelectorAll(".snowflake");

snowflakes.forEach(function (snowflake) {
  let flake = new Snowflake(snowflake);
  setInterval(function () {
    flake.play();
  }, 50);
});
