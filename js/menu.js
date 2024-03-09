// SELECT ELEMENT
const productsEl = document.querySelector(".row");
const totalItemEL = document.querySelector(".total");

//RENDER PRODUCT
function renderProducts() {
  productList.forEach((product) => {
    productsEl.innerHTML += `<div class="col-12 col-xl-3 col-lg-4 col-sm-12 col-md-6 gx-5 gy-5">
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
                <a class="btn btn-primary added" onClick="addToCart(${product.id});" >Add to Cart</a>
              </div>
            </div>
          </div>
        </div>`;
  });
}
renderProducts();

//cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
//ADD TO CART
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    alert("Product already in cart");
  } else {
    alert("successfully added to cart");
    const item = productList.find((product) => product.id === id);
    // add unit quantity to cart
    cart.push({
      ...item,
      quantity: 1,
    });
    // document.querySelectorAll("added").map((cart) => {
    //   ca.style.backgroundColor = "red";
    // });

    //update cart alert
    let totalItems = 0;
    cart.forEach((item) => {
      totalItems += item.quantity;
    });
    if (totalItems === 0) {
      totalItemEL.innerHTML = `
      <li class="nav-item">
      <a class="nav-link" href="cart.html">CART</a>
    </li>`;
    } else {
      totalItemEL.innerHTML = `
    <li class="nav-item">
          <a class="nav-link" href="cart.html">CART
          <i class="order-item rounded-circle"
              style="padding-right: 3px; padding-left: 2px">${totalItems}</i>
              </a>
      </li>`;
    }
  }
  //save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}
//get cart from local storage
let listCart = JSON.parse(localStorage.getItem("CART")) || [];
//calculate and render subtotal
function renderSubTotal() {
  let totalItems = 0;

  listCart.forEach((item) => {
    totalItems += item.quantity;
  });
  if (totalItems === 0) {
    totalItemEL.innerHTML = `
    <li class="nav-item">
    <a class="nav-link" href="cart.html">CART</a>
  </li>`;
  } else {
    totalItemEL.innerHTML = `
   <li class="nav-item">
        <a class="nav-link" href="cart.html">CART
        <i class="order-item rounded-circle"
            style="padding-right: 3px; padding-left: 2px">${totalItems}</i>
            </a>
    </li>`;
  }
}
renderSubTotal();
