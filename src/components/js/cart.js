const items = [
  {
    id: 0,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    amount: 1,
    img: "../src/img/feature_item_1.jpg"
  },
  {
    id: 1,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    amount: 1,
    img: "../src/img/feature_item_2.jpg"
  },
  {
    id: 2,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    amount: 1,
    img: "../src/img/feature_item_3.jpg"
  },
  {
    id: 3,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    amount: 1,
    img: "../src/img/feature_item_4.jpg"
  },
  {
    id: 4,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    amount: 2,
    img: "../src/img/feature_item_5.jpg"
  },
];

const cart = {
  items: [],
  container: null,
  containerTotal: null,
  total: 0,

  init() {
    this.items = items;
    this.container = document.querySelector("#shopping-cart__items");
    this.containerTotal = document.querySelectorAll(".shopping-cart__span");
    this.total = this._recalcTotal();
    this._render();
    this._handleActions();
  },

  _recalcTotal() {
    // let totalPrice = 0;
    // this.items.forEach(item => {
    //   totalPrice = totalPrice + item.amount * item.price
    // });

    return this.items.reduce((totalPrice, item) => totalPrice + item.amount * item.price, 0);

    // return totalPrice;
  },

  _handleActions() {
    this.container.addEventListener('click', evt => {
      if (evt.target.classList.contains('remove-shopping-cart')) {
        this.total = this._recalcTotal();
        this.remove(+evt.target.dataset.id);
      }
    });
    this.container.addEventListener('change', evt => {
      if (evt.target.classList.contains('shopping-cart__box1__input')) {

        if (((parseInt(evt.target.value) - parseFloat(evt.target.value)) !== 0) || (evt.target.value < 0)) {
          evt.target.value = 1;
        }

        this.items[evt.target.dataset.id].amount = evt.target.value;
        this.total = this._recalcTotal();
        this._render();
      }
    });
  },

  _render() {
    let $str = "";
    this.items.forEach(item => {
      $str += `<article class="shopping-cart__item shopping-cart__item_l">
          <div class="shopping-cart__box1">
            <div class="shopping-cart__box1__img">
              <img class="shopping-cart__img" src="${item.img}" alt="products_item_1">
            </div>
            <div class="shopping-cart__box">
              <h2 class="shopping-cart__h2">${item.name}</h2>
              <p class="shopping-cart__box1__p0"><span class="shopping-cart__box1__span">Color:</span> Red</p>
              <p class="shopping-cart__box1__p1"><span class="shopping-cart__box1__span">Size:</span> Xll</p>
            </div>
          </div>
          <div class="shopping-cart__box2 shopping-cart__center">
            <p class="shopping-cart__box1__p2">$${item.price}</p>
          </div>
          <div class="shopping-cart__box3 shopping-cart__center">
            <label for="cart-box${item.id}"></label>
            <input class="shopping-cart__box1__input" id="cart-box${item.id}" type="text" data-id="${item.id}" 
            value="${item.amount}" pattern="\\S+[1-100]">
          </div>
          <div class="shopping-cart__box4 shopping-cart__center">
            <p class="shopping-cart__box1__p3">FREE</p>
          </div>
          <div class="shopping-cart__box5 shopping-cart__center">
            <p class="shopping-cart__box1__p2">${item.price * item.amount}</p>
          </div>
          <div class="shopping-cart__box6 shopping-cart__center">
            <i class="fa fa-times-circle remove-shopping-cart" data-id="${item.id}"></i>
          </div>
      </article>`;
    });

    this.container.innerHTML = $str;

    this.containerTotal.forEach((item) => {
      item.innerHTML = `$${this.total}`;
    });
  },

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
  },

  remove(itemId) {
    console.log(itemId);
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
};

export default cart;
