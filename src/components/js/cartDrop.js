// <------------------------------Object-------------------------------------->
// const cartDrop = {
//   items: [],
//   container: null,
//   total: 0,
//
//   init() {
//     this.container = document.querySelector("#cart__drop");
//     this._render();
//     this._handleActions();
//   },
//
//   _handleActions() {
//     this.container.addEventListener('click', event => {
//       if (event.target.classList.contains('remove-cart')) {
//         this.remove(event.target.dataset.id);
//       }
//     })
//   },
//
//   _render() {
//     let $str = "";
//     this.items.forEach(item => {
//       $str += `<div class="cart__prod">
//           <img class="cart__prod__img" src="${item.img}" alt="cart_prod2">
//           <div class="prod_block">
//             <p class="prod__name">${item.name}</p>
//             <img src="../img/prod_rait.png" alt="prod_rait">
//             <p class="prod__price">${item.amount} x $${item.price}</p>
//           </div>
//           <i class="fa fa-times-circle remove-cart" data-id="${item.id}"></i>
//         </div>
//         <hr class="cart__hr">`;
//     });
//
//     this.container.innerHTML = $str + `<div class="cart__total">
//                                 <p class="cart__total__price">TOTAL</p>
//                                 <p class="cart__total__price">$${this.total}</p>
//                             </div>
//                             <a class="cart__button_a" href="./checkout.html">Checkout</a>
//                             <a class="cart__button_a" href="./shopping_cart.html">Go to cart</a>`;
//
//   },
//   add(item) {
//     let find = this.items.find(el => el.id === item.id);
//
//     if (!find) {
//       this.items.push(item);
//       this.total = this.total + Number(item.price);
//     } else {
//       find.amount++;
//       this.total = this.total + Number(find.price);
//     }
//     this._render();
//   },
//   remove(itemId) {
//     let find = this.items.find(el => el.id === itemId);
//
//     if (find.amount > 1) {
//       find.amount--;
//       this.total = this.total - Number(find.price);
//     } else {
//       this.items.splice(this.items.indexOf(find), 1);
//       this.total = this.total - Number(find.price);
//     }
//     this._render();
//   }
// };

//<---------------------function constructor------------------------>
// function NewCartDrop() {
//   this.items = [];
//   this.container = null;
//   this.total = 0;
// }
//
// NewCartDrop.prototype.init = function () {
//   this.container = document.querySelector("#cart__drop");
//   this._render();
//   this._handleActions();
// };
//
// NewCartDrop.prototype._handleActions = function () {
//   this.container.addEventListener('click', event => {
//     if (event.target.classList.contains('remove-cart')) {
//       this.remove(event.target.dataset.id);
//     }
//   });
// };
//
// NewCartDrop.prototype._render = function () {
//   let $str = "";
//   this.items.forEach(item => {
//     $str += `<div class="cart__prod">
//           <img class="cart__prod__img" src="${item.img}" alt="cart_prod2">
//           <div class="prod_block">
//             <p class="prod__name">${item.name}</p>
//             <img src="../img/prod_rait.png" alt="prod_rait">
//             <p class="prod__price">${item.amount} x $${item.price}</p>
//           </div>
//           <i class="fa fa-times-circle remove-cart" data-id="${item.id}"></i>
//         </div>
//         <hr class="cart__hr">`});
//
//   this.container.innerHTML = $str + `<div class="cart__total">
//         <p class="cart__total__price">TOTAL</p>
//         <p class="cart__total__price">$${this.total}</p>
//       </div>
//       <a class="cart__button_a" href="./checkout.html">Checkout</a>
//       <a class="cart__button_a" href="./shopping_cart.html">Go to cart</a>`;
// };
//
// NewCartDrop.prototype.add = function (item) {
//   let find = this.items.find(el => el.id === item.id);
//
//   if (!find) {
//     this.items.push(item);
//     this.total = this.total + Number(item.price);
//   } else {
//     find.amount++;
//     this.total = this.total + Number(find.price);
//   }
//   this._render();
// };
//
// NewCartDrop.prototype.remove = function (itemId) {
//   let find = this.items.find(el => el.id === itemId);
//
//   if (find.amount > 1) {
//     find.amount--;
//     this.total = this.total - Number(find.price);
//   } else {
//     this.items.splice(this.items.indexOf(find), 1);
//     this.total = this.total - Number(find.price);
//   }
//   this._render();
// };

//<----------------------------class----------------------------------->
class CartDrop {
  constructor() {
    this.items = [];
    this.container = null;
    this.total = 0;
  }

  init() {
    this.container = document.querySelector("#cart__drop");
    this._render();
    this._handleActions();
  }

  _handleActions() {
    this.container.addEventListener('click', event => {
      if (event.target.classList.contains('remove-cart')) {
        this.remove(event.target.dataset.id);
      }
    })
  }

  _render() {
    let $str = "";
    this.items.forEach(item => {
      $str += `<div class="cart__prod">
          <img class="cart__prod__img" src="${item.img}" alt="cart_prod2">
          <div class="prod_block">
            <p class="prod__name">${item.name}</p>
            <img src="../img/prod_rait.png" alt="prod_rait">
            <p class="prod__price">${item.amount} x $${item.price}</p>
          </div>
          <i class="fa fa-times-circle remove-cart" data-id="${item.id}"></i>
        </div>
        <hr class="cart__hr">`;
    });

    this.container.innerHTML = $str + `<div class="cart__total">
                                <p class="cart__total__price">TOTAL</p>
                                <p class="cart__total__price">$${this.total}</p>
                            </div>
                            <a class="cart__button_a" href="./checkout.html">Checkout</a>
                            <a class="cart__button_a" href="./shopping_cart.html">Go to cart</a>`;

  }

  add(item) {
    let find = this.items.find(el => el.id === item.id);

    if (!find) {
      this.items.push(item);
      this.total = this.total + Number(item.price);
    } else {
      find.amount++;
      this.total = this.total + Number(find.price);
    }
    this._render();
  }

  remove(itemId) {
    let find = this.items.find(el => el.id === itemId);

    if (find.amount > 1) {
      find.amount--;
      this.total = this.total - Number(find.price);
    } else {
      this.items.splice(this.items.indexOf(find), 1);
      this.total = this.total - Number(find.price);
    }
    this._render();
  }
}

const cartDrop = new CartDrop();

export default cartDrop;
