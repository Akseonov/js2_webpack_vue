import List from "./list";

export class CartDrop extends List {
  constructor(url, container) {
    super(url, container);
  }

  render() {
    super.render();

    document.querySelector(this.container).innerHTML = super.render() +
      `<div class="cart__total">
        <p class="cart__total__price">TOTAL</p>
        <p class="cart__total__price">$${this.total}</p>
       </div>
       <a class="cart__button_a" href="./checkout.html">Checkout</a>
       <a class="cart__button_a" href="./shopping_cart.html">Go to cart</a>`;
  }

  _handleActions() {
    document.querySelector(this.container).addEventListener('click', event => {
      if (event.target.classList.contains('remove-cart')) {
        event.preventDefault();
        this.remove(event.target.dataset.product_id);
      }
    })
  }

  add(item) {
    let find = this.items.find(el => el.product_id === item.product_id);

    if (!find) {
      this.items.push(item);
      this.total = this.total + Number(item.price);
    } else {
      find.amount++;
      this.total = this.total + Number(find.price);
    }
    this.render();
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
    this.render();
  }
}

export class Catalog extends List {
  constructor(url, container, cartDrop) {
    super(url, container, cartDrop);
  }

  render() {
    document.querySelector(this.container).innerHTML = super.render();
  }

  _handleActions(cartDrop) {
    document.querySelector(this.container).addEventListener('click', event => {
      if (event.target.classList.contains("feature__a")) {
        event.preventDefault();
        let item = {
          product_id: +event.target.dataset.id,
          name: event.target.dataset.name,
          price: +event.target.dataset.price,
          img: event.target.dataset.img,
          amount: 1,
        };
        cartDrop.add(item);
      }
    })
  }
}