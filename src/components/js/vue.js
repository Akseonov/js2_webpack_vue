"use strict";

let app = new Vue({
  el: '.wrapper',

  data: {
    urlCart: 'https://raw.githubusercontent.com/Akseonov/static/main/psd_1/json' + '/basket.json',
    urlCatalog: 'https://raw.githubusercontent.com/Akseonov/static/main/psd_1/json' + '/catalog.json',
    containerCart: '#cart__drop',
    containerCatalog: '#feature__content',
    itemsCart: [],
    itemsCatalog: [],
    total: 0,
  },

  methods: {
    getItems(url) {
      return fetch(url).then(items => items.json());
    },

    add(item) {
      let obj = {};

      let find = this.itemsCart.find(el => el.product_id === item.id);

      if (!find) {
        obj = {
          product_id: item.id,
          name: item.name,
          price: item.price,
          img: item.img,
          amount: 1,
        };
        this.itemsCart.push(obj);
        this.total = this.total + Number(item.price);
      } else {
        find.amount++;
        this.total = this.total + Number(find.price);
      }
    },

    remove(itemId) {
      let find = this.itemsCart.find(el => el.product_id === itemId);

      if (find.amount > 1) {
        find.amount--;
        this.total = this.total - Number(find.price);
      } else {
        this.itemsCart.splice(this.itemsCart.indexOf(find), 1);
        this.total = this.total - Number(find.price);
      }
    }
  },

  mounted() {
    this.getItems(this.urlCart)
      .then(items => {
        this.itemsCart = items.contents;
        this.total = items.total;
      });
    this.getItems(this.urlCatalog)
      .then(items => {
        this.itemsCatalog = items;
      });
  },
});