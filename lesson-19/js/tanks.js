class Tanks {
  constructor(img, totalTanks) {
    this.img = img;
    this.totalTanks = totalTanks;
    this.x = Math.random() * window.innerWidth;
    this.y = 0;
    this.maxSpeed = 40;
    this.speed = Math.random() * this.maxSpeed;
  }
  render() {
    this.tankElement = document.createElement("img");
    this.tankElement.setAttribute("src", this.img);
    this.tankElement.classList.add("tank");
    this.tankElement.style.position = "absolute";
    this.tankElement.style.left = this.x + "px";
    this.tankElement.style.top = this.y + "px";
    document.body.appendChild(this.tankElement);
    this.tankElement.addEventListener("click", () => {
      this.explode();
    });
  }
  movement() {
    this.y += this.speed;
    if (this.y > window.innerHeight) {
      this.y = 0;
      this.x = Math.random() * window.innerWidth;
      this.speed = Math.random() * this.maxSpeed;
    }
  }
  explode() {
    const explosionElement = document.createElement("img");
    explosionElement.setAttribute("src", "../img/fire.png");
    explosionElement.classList.add("explosion");
    explosionElement.style.position = "absolute";
    explosionElement.style.left = this.x + "px";
    explosionElement.style.top = this.y + "px";
    document.body.appendChild(explosionElement);
    this.tankElement.style.display = "none";
    setTimeout(() => {
      explosionElement.remove();
      this.x = Math.random() * window.innerWidth;
      this.y = 0;
      this.speed = Math.random() * this.maxSpeed;
      this.tankElement.style.display = "block";
      this.tankElement.style.left = this.x + "px";
      this.tankElement.style.top = this.y + "px";
    }, 1000);
  }
}
const tankImg = "../img/tank.png";
const numTanks = 10;

const tanks = [];
for (let i = 0; i < numTanks; i++) {
  const tank = new Tanks(tankImg, i);
  tank.render();
  tanks.push(tank);
}

setInterval(() => {
  tanks.forEach((tank) => {
    tank.movement();
    tank.tankElement.style.left = tank.x + "px";
    tank.tankElement.style.top = tank.y + "px";
  });
}, 50);
