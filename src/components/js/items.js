import {Item} from "./item";

export class CatalogItem extends Item {
  render() {
    let item = this.item;
    return `
      <article class="feature__item">
                <a href="./single_page.html">
                  <img 
                    src="${item.img}" 
                    alt="${item.name}"
                  >
                </a>
                  <div class="feature__info">
                    <a class="feature__info__a" href="./single_page.html">${item.name}</a>
                      <h4 class="feature__h4">$${item.price}</h4>
                  </div>
                  <div>
                    <a href="#" class="feature__a" 
                        data-id="${item.id}" 
                        data-name="${item.name}" 
                        data-price="${item.price}" 
                        data-img="${item.img}">Add to Cart</a>
                  </div>
      </article>
    `;
  }
}

export class CartDropItem extends Item {
  render() {
    let item = this.item;
    return `
          <div class="cart__prod">
          <img class="cart__prod__img" src="${item.img}" alt="cart_prod2">
          <div class="prod_block">
            <p class="prod__name">${item.name}</p>
            <img src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/prod_rait.png" alt="prod_rait">
            <p class="prod__price">${item.amount} x $${item.price}</p>
          </div>
          <i class="fa fa-times-circle remove-cart" data-id="${item.product_id}"></i>
        </div>
        <hr class="cart__hr">
        `;
  }
}