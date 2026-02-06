import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam, updateCartBadge } from "./utils.mjs";

loadHeaderFooter();

// 1️⃣ Read category from URL, default to "tents"
let category = getParam("category");
if (!category) {
  category = "tents"; // default category if nothing in the querystring
}

// 2️⃣ Nice readable title
const readableCategory = category
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

document.getElementById("product-title").textContent =
  `Top Products: ${readableCategory}`;

// 3️⃣ Load products for that category
const dataSource = new ExternalServices();
const listElement = document.querySelector(".product-list");
const myList = new ProductList(category, dataSource, listElement);
myList.init();

// 4️⃣ Keep cart badge in sync
updateCartBadge();
window.addEventListener("storage", updateCartBadge);
