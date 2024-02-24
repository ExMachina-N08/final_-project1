// SELECT ELEMENT
const productsEl = document.querySelector(".row");

//RENDER PRODUCT
function renderProducts() {
  productList.forEach((product) => {
    productsEl.innerHTML += `<div class="col-12 col-sm-4 col-md-3 gx-3 gy-3">
          <div class="card">
            <img
              src="${product.imgsScr}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body ">
              <h5 class="card-title fw-bold">${product.name}</h5>
              <p class="card-text text-sm-start lh-sm">
                Some quick example text to build on the card title
              </p>
              <h5 class="card-text text-md-start">$${product.price}</h5>
              <div class="d-grid gap-2 d-md-flex justify-content-end">
                <a class="btn btn-primary" onClick="addToCart(${product.id})" >Add to Cart</a>
              </div>
            </div>
          </div>
        </div>`;
  });
}
renderProducts();
//cart array
let cart = [];
//ADD TO CART
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    alert("Product already in cart");
  } else {
    const item = productList.find((product) => product.id === id);
    // add unit quantity to cart
    cart.push({
      ...item,
      quantity: 1,
    });
  }
  //save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}
