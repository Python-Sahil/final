import { products } from "../Js/products.js";//this code is to import the products data to use in this main.js
import { formatCurrency } from "../Js/money.js";//this is to import the money converted into two decimals
let productsHTML = "";

function showAlert() {
  alert("The product was added");
}

products.forEach((product) => {//this is a forEach loop to make the same html created for the products 
  productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            
            <div class="product-rating-count link-primary">
              
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          

         <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
          Add to Cart
        </button>
        </div>
    `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;// this is for maintaining the grid for the products


// Add event listeners after the HTML is inserted
document.querySelectorAll(".js-add-to-cart").forEach(button => {
  button.addEventListener("click", showAlert);
});