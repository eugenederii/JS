class Stars {
  constructor(img, totalStars) {
    this.img = img;
    this.totalStars = totalStars;
    this.minSize = 10;
    this.maxSize = 50;
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * (this.maxSize - this.minSize) + this.minSize;
  }
  render() {
    const starElement = document.createElement("img");
    starElement.setAttribute("src", this.img);
    starElement.classList.add("star");
    starElement.style.top = this.y + "px";
    starElement.style.left = this.x + "px";
    starElement.style.width = `${this.size}px`;
    starElement.style.height = `${this.size}px`;
    document.body.appendChild(starElement);

    let scale = 1;
    const scaleStep = Math.random() * (0.1 - 0.01) + 0.01;
    const maxScale = 1.5;

    const scaleInterval = setInterval(() => {
      if (scale >= maxScale) {
        clearInterval(scaleInterval);
        starElement.remove();
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * (this.maxSize - this.minSize) + this.minSize;
        this.render();
      } else {
        scale += scaleStep;
        starElement.style.transform = `scale(${scale})`;
      }
    }, 50);
  }
}

const starImgSrc = "../img/star.png";
const numStars = 100;

const stars = [];
for (let i = 0; i < numStars; i++) {
  const star = new Stars(starImgSrc, i);
  stars.push(star);
}

stars.forEach((star) => {
  star.render();
});
