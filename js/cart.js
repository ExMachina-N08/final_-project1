//get cart from local storage
let listCart = JSON.parse(localStorage.getItem("CART")) || [];
console.log(listCart);

//select cart elements
const cartItemEl = document.querySelector(".basket");
const removeButton = document.querySelectorAll(".remove");
const subtotalEl = document.querySelector(".subtotal");

//update cart
function updateCart() {
  renderCartItem();
  renderSubTotal();
}

//render cart items
function renderCartItem() {
  cartItemEl.innerHTML = ""; //clear cart element
  listCart.forEach((item) => {
    cartItemEl.innerHTML += `
      <tr class="cart-items">
          <td data-th="">
              <div class="row">
              <div class="col-md-3 text-left">
                  <img
                      src="${item.imgsScr}"
                      alt=""
                      class="img-fluid d-none d-md-block rounded-circle mb-2 shadow"
                  />
                  </div>
                  <div class="col-md-9 text-left mt-sm-2">
                  <h4 class="text-light">${item.name}</h4>
                  <p class="text-light font-weight-light">
                  ${item.description}
                  </p>
                  </div>
              </div>
              </td>
              <td class="text-light" data-th="Price">$${item.price}</td>
              <td data-th="Quantity">
              <div class="d-flex flex-row">
                  <button
                    class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  
                    <i onclick="changeNumberOfUnits('minus', ${item.id})" class="bi bi-dash text-light"></i>
                  </button>
  
                  <input
                  id="${item.id}"
                    min="0"
                    name="quantity"
                    value="${item.quantity}"
                    type="number"
                    class="form-control form-control-sm text-light bg-transparent"
                    style="width: 50px"
                  />
  
                  <button
                    class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  
                    <i onclick="changeNumberOfUnits('plus', ${item.id})" class="bi bi-plus text-light"></i>
                  </button>
               </div>
              </td>
              <td class="actions" data-th="">
              <div class="text-right">
                  <button
                  class="remove btn btn-dark border-secondary bg-transparent border-0 btn-lg mb-2"
                  >
                  <i class="fa-trash"><i class="bi bi-trash"></i></i>
                  </button>
              </div>
              </td>
          </tr>
          `;
  });
}
renderCartItem();

//calculate and render subtotal
function renderSubTotal() {
  let totalPrice,
    totalItems = 0;

  listCart.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalItems += item.quantity;
  });
  subtotalEl.innerHTML = `<div class="float-right text-right subtotal">
  <h4 class="text-light">Subtotal:</h4>
  <h1 class="text-light subtotal">$${totalPrice}</h1>
</div>`;
}

//increment and decrement
// let increment = (item) => {
//   console.log(item);
// };

// let decrement = (item) => {
//   console.log(item);
// };

// change number of units
function changeNumberOfUnits(action, id) {
  listCart = listCart.map((item) => {
    let quantity = item.quantity;
    if (item.id === id) {
      if (action === "minus") {
        quantity--;
      } else if (action === "plus") {
        quantity++;
      }
    }
    return {
      ...item,
      quantity,
    };
  });
  updateCart();
}
updateCart();
//remove button
// removeButton.forEach((button) => {
//   button.addEventListener("click", () => {
//     let removeItem = button.cart - items;
//     item.remove;
//   });
// });
