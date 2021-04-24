import {CartDropItem, CatalogItem} from "./items";

let classes = {
  'CartDrop': CartDropItem,
  'Catalog': CatalogItem,
};

export default class List {
  constructor(url, container, cartDrop) {
    this.url = 'https://raw.githubusercontent.com/Akseonov/static/main/psd_1/json' + url;
    this.container = container;
    this.items = [];
    this.total = 0;
    this.init(cartDrop);
  }

  init(cartDrop = false) {
    this.getItems(this.url)
      .then(data => {
        if (cartDrop) {
          this.items = data
        } else {
          this.items = data.contents;
          this.total = data.total;
        }
      })
      .then(() => {
        this.render();
        this._handleActions(cartDrop);
      });
  }

  getItems(url) {
    return fetch(url).then(items => items.json());
  }

  render() {
    let list = ``;
    this.items.forEach(item => {
      list += new classes[this.constructor.name](item).render();
    });
    return list;
  }

  _handleActions() {

  }
}