const CATALOG = [
  {
    id: "el1",
    status: "Топ продаж",
    img: "../img/ASUS.jpg",
    title: "Ноутбук ASUS TUF Gaming A15 FA506ICB-HN119",
    price: 35999,
  },
  {
    id: "el2",
    status: "Топ продаж",
    img: "../img/acer.jpg",
    title: "Ноутбук Acer Aspire 7 A715-42G-R8N5 ",
    price: 18000,
  },
  {
    id: "el3",
    status: "Акція",
    img: "../img/macbook.jpg",
    title: "Ноутбук Apple MacBook Air 13.6",
    price: 50000,
  },
  {
    id: "el4",
    status: "Топ продаж",
    img: "../img/lenovo.jpg",
    title: "Ноутбук Lenovo IdeaPad Gaming 3 15ACH6",
    price: 21999,
  },
];

class Products {
  constructor() {
    this.catalog = CATALOG;
    this.root = document.getElementById("products");
  }

  render() {
    let htmlCatalog = "";

    this.catalog.forEach(({ id, status, img, title, price }) => {
      const statusClassName = status === "Топ продаж" ? "products-item__status_top" : "products-item__status_action";

      htmlCatalog += this.generateProductHtml(id, status, img, title, price, statusClassName);
    });
    this.root.innerHTML = this.generateCatalogHtml(htmlCatalog);
  }

  generateProductHtml(id, status, img, title, price, statusClassName) {
    return `
      <li class="products-item">
        <span class="${statusClassName}">${status}</span>
        <img class="products-item__img" src="${img}">
        <span class="products-item__title">${title}</span>
        <span class="products-item__price">${price.toLocaleString()} ₴</span>
      </li>
    `;
  }

  generateCatalogHtml(htmlCatalog) {
    return `
      <ul class="products-container">${htmlCatalog}</ul>
    `;
  }

  addListeners() {
    this.root.addEventListener("click", (event) => {
      const target = event.target.closest(".products-item");
      if (!target) return;
      const productsList = document.querySelectorAll(".products-item");

      productsList.forEach((product) => {
        product.classList.remove("selected");
      });

      target.classList.add("selected");
    });
  }
}

const ROOT_PRODUCTS = document.getElementById("products");
const products = new Products();
products.render();
products.addListeners();
