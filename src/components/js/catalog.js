import cartDrop from './cartDrop';

const items = [
  {
    id: 0,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    img: "../img/feature_item_1.jpg"
  },
  {
    id: 1,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    img: "../img/feature_item_2.jpg"
  },
  {
    id: 2,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    img: "../img/feature_item_3.jpg"
  },
  {
    id: 3,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    img: "../img/feature_item_4.jpg"
  },
  {
    id: 4,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    img: "../img/feature_item_5.jpg"
  },
  {
    id: 5,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    img: "../img/feature_item_6.jpg"
  },
  {
    id: 6,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    img: "../img/feature_item_7.jpg"
  },
  {
    id: 7,
    name: "MANGO PEOPLE T-SHIRT",
    price: "52.00",
    img: "../img/feature_item_8.jpg"
  },
];

//<-----------------------------object------------------------------->
// const catalog = {
//   items: [],
//   container: null,
//   cartDrop: null,
//
//   init() {
//     this.items = items;
//     this.container = document.querySelector("#feature__content");
//     this.cartDrop = cartDrop;
//     this._render();
//     this._handleActions();
//   },
//
//   _handleActions() {
//     this.container.addEventListener('click', event => {
//       if (event.target.classList.contains("feature__a")) {
//         event.preventDefault();
//         let item = {
//           id: event.target.dataset.id,
//           name: event.target.dataset.name,
//           price: +event.target.dataset.price,
//           img: event.target.dataset.img,
//           amount: 1,
//         };
//         this.cartDrop.add(item);
//       }
//     })
//   },
//
//   _render() {
//     let $str = "";
//     this.items.forEach(item => {
//       $str += `<article class="feature__item">
//                 <a href="./single_page.html">
//                   <img src="${item.img}" alt="${item.name}">
//                 </a>
//                   <div class="feature__info">
//                     <a class="feature__info__a" href="./single_page.html">${item.name}</a>
//                       <h4 class="feature__h4">$${item.price}</h4>
//                   </div>
//                   <div>
//                     <a href="#" class="feature__a" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}"
//                         data-img="${item.img}">Add to Cart</a>
//                   </div>
//       </article>`;
//     });
//     this.container.innerHTML = $str;
//   }
// };


//<----------------------------class--------------------------------->
class Catalog {
  constructor() {
    this.items = [];
    this.container = null;
    this.cartDrop = null;
  }

  init() {
    this.getItems('/catalog').then(() => {
      this.container = document.querySelector("#feature__content");
      this.cartDrop = cartDrop;
      this._render();
      this._handleActions();
    });
  }

  _handleActions() {
    this.container.addEventListener('click', event => {
      if (event.target.classList.contains("feature__a")) {
        event.preventDefault();
        let item = {
          id: event.target.dataset.id,
          name: event.target.dataset.name,
          price: +event.target.dataset.price,
          img: event.target.dataset.img,
          amount: 1,
        };
        this.cartDrop.add(item);
      }
    })
  }

  _render() {
    let $domEl = "";
    this.items.forEach(item => {
      $domEl += `<article class="feature__item">
                <a href="./single_page.html">
                  <img src="${item.img}" alt="${item.name}">
                </a>
                  <div class="feature__info">
                    <a class="feature__info__a" href="./single_page.html">${item.name}</a>
                      <h4 class="feature__h4">$${item.price}</h4>
                  </div>
                  <div>
                    <a href="#" class="feature__a" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" 
                        data-img="${item.img}">Add to Cart</a>
                  </div>
      </article>`;
    });
    this.container.innerHTML = $domEl;
  }

  sendRequest(url) {
    return new Promise((resolve, reject) => {
      let xhr;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.open('GET', url, true);

      xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status !== 200) {
            reject();
          }
          const catalog = JSON.parse(xhr.responseText);
          resolve(catalog);
        }
      };
      xhr.send();
    });
  }

  getItems(url) {
    return this.sendRequest(url).then(
      //onFulfilled
      (catalog) => {
        this.items = catalog;
      },
      //onRejected
      () => {}
    )
  }
}

const catalog = new Catalog();

export default catalog;