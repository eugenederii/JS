class Table {
  constructor(minValue, maxValue) {
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.dataArray = this.getArray();
  }

  randomNumber() {
    return Math.floor(Math.random() * (this.maxValue - this.minValue + 1));
  }

  getArray() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let k = 0; k < 4; k++) {
        row.push(this.randomNumber());
      }
      arr.push(row);
    }
    return arr;
  }

  render(containerId) {
    const table = document.createElement("table");
    for (const row of this.dataArray) {
      const tr = document.createElement("tr");
      for (const el of row) {
        const td = document.createElement("td");
        td.innerHTML = el;
        tr.append(td);
      }
      table.append(tr);
    }
    document.getElementById(containerId).append(table);
  }
}

window.onload = function () {
  const t1 = new Table(1, 100);
  t1.render("table");
};
