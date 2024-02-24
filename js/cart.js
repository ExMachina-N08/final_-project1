//select cart elements
const cartItemEl = document.querySelector(".cart-items");
//get cart from local storage
let listCart = JSON.parse(localStorage.getItem("CART")) || [];
console.log(listCart);
//update cart
function updateCart() {
  renderCartItem();
  renderSubTotal();
}
//render cart items
listCart.forEach((item) => {
  cartItemEl.innerHTML += `<tr class="cart-items">
            <td data-th="Product">
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
            <td class="text-light" data-th="Price">${item.price}</td>
            <td data-th="Quantity">
            <input
                type="number"
                class="form-control form-control-lg text-light text-center bg-transparent border-0 shadow-none"
                value="${item.quantity}"
            />
            </td>
            <td class="actions" data-th="">
            <div class="text-right">
                <!-- <button
                class="btn btn-white border-secondary bg-white btn-md mb-2"
                >
                <i class="fas fa-sync"></i>
                </button> -->
                <button
                class="btn btn-dark border-secondary bg-transparent border-0 btn-lg mb-2"
                >
                <i class="fa-trash"><i class="bi bi-trash"></i></i>
                </button>
            </div>
            </td>
        </tr>`;
});
