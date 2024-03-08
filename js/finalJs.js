//get cart from local storage
let listCart = JSON.parse(localStorage.getItem("CART")) || [];

const totalItemEL = document.querySelector(".total");

//calculate and render subtotal
function renderSubTotal() {
  let totalItems = 0;

  listCart.forEach((item) => {
    totalItems += item.quantity;
  });
  if (totalItems === 0) {
    totalItemEL.innerHTML = `
    <li class="nav-item">
    <a class="nav-link" href="cart.html">Cart</a>
  </li>`;
  } else {
    totalItemEL.innerHTML = `
   <li class="nav-item">
        <a class="nav-link" href="cart.html">CART
        <i class="order-item rounded-circle"
            style="padding-right: 3px; padding-left: 2px">${totalItems}</i>
            </a>
    </li>`;
    console.log(totalItems);
  }
}
renderSubTotal();
//   totalItemEL.innerHTML = `
//    <li class="nav-item">
//         <a class="nav-link" href="cart.html">Cart
//         <i class="order-item rounded-circle"
//             style="padding-right: 3px; padding-left: 2px">${totalItems}</i>
//             </a>
//     </li>`;
