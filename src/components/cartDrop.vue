<template>
	<div class="header__cart__block">
		<img class="header__cart" src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/cart.svg"
		     alt="cart">
		<div class="cart__drop" id="cart__drop">
			<item
				v-for="item of items"
				type="cartDrop"
				:key="item.product_id"
				:item="item"
				@remove="removeItem"
			/>
			<div class="cart__total">
				<p class="cart__total__price">TOTAL</p>
				<p class="cart__total__price">${{ total }}.00</p>
			</div>
			<a class="cart__button_a" href="./checkout.html">Checkout</a>
			<a class="cart__button_a" href="./shopping_cart.html">Go to cart</a>
		</div>
	</div>
</template>

<script>
	import item from './item.vue';
	import {getItems, postItem, putItem, deleteItem} from '../utils/requests.js';

	export default {
		name: "cartDrop",
		components: {
			'item': item,
		},

		data() {
			return {
				// url: 'https://raw.githubusercontent.com/Akseonov/static/main/psd_1/json/basket.json',
				url: '/api/cart',
				items: [],
				total: 0,
			}
		},

		methods: {
			addItem(item) {
				let find = this.items.find(el => el.product_id === item.id);

				if (!find) {
					const obj = {
						product_id: item.id,
						name: item.name,
						price: item.price,
						amount: 1,
						img: item.img,
					};

					postItem(this.url, obj)
						.then(res => {
							if (res.status) {
								this.items.push(obj);
								this.total = this.total + Number(item.price);
							} else {
								console.log('Server err');
							}
						});
				} else {
					putItem(`${this.url}/${find.product_id}`, 1)
						.then(res => {
							if (res.status) {
								find.amount++;
								this.total = this.total + Number(find.price);
							} else {
								console.log('Server err');
							}
						});
				}
			},

			removeItem(itemId) {
				let find = this.items.find(el => el.product_id === itemId);

				if (find.amount > 1) {
					putItem(`${this.url}/${find.product_id}`, -1)
						.then(res => {
							if (res.status) {
								find.amount--;
								this.total = this.total - Number(find.price);
							} else {
								console.log('Server err');
							}
						});
				} else {
          deleteItem(`${this.url}/${find.product_id}`)
            .then(res => {
              if (res.status) {
                this.items.splice(this.items.indexOf(find), 1);
                this.total = this.total - Number(find.price);
              } else {
                console.log('Server err');
              }
            });
				}
			},
		},

		mounted() {
			// this.$parent.getItems(this.url)
			// 	.then(items => {
			// 		this.items = items.contents;
			// 		this.total = items.total;
			// 	});
			getItems(this.url)
				.then(items => {
					this.items = items.contents;
					this.total = items.total;
				});
		},
	}
</script>

<style scoped>

</style>