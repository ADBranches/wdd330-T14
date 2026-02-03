import ExternalServices from './ExternalServices.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter, getParam, updateCartBadge } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');
const categoryDisplay = category ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') : 'Products';
document.getElementById('product-title').textContent = `Top Products: ${categoryDisplay}`;

const dataSource = new ExternalServices();
const listElement = document.querySelector('.product-list');
const myList = new ProductList(category, dataSource, listElement);
myList.init();

updateCartBadge(); // refresh badge on page load
window.addEventListener("storage", updateCartBadge);