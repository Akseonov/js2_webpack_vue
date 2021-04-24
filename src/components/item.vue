<template>
	<div>
		<template v-if="type == 'catalog'">
			<article class="feature__item">
				<a href="./single_page.html">
					<img :src="item.img" alt="feature_item">
				</a>
				<div class="feature__info">
					<a class="feature__info__a" href="./single_page.html">{{item.name}}</a>
					<h4 class="feature__h4">${{item.price}}</h4>
				</div>
				<div>
					<a href="#" class="feature__a" @click.prevent="$parent.$emit('add', item)">Add to Cart</a>
				</div>
			</article>
		</template>

		<template v-if="type == 'cartDrop'">
			<div class="cart__prod">
				<div class="cart__prod__min">
					<img :src="item.img" class="cart__prod__img" alt="cart_prod">
					<div class="prod_block">
						<p class="prod__name">{{item.name}}</p>
						<img src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/prod_rait.png"
						     alt="prod_rait">
						<p class="prod__price">{{item.amount}} x ${{item.price}}</p>
					</div>
					<i class="fa fa-times-circle remove-cart" @click.prevent="$emit('remove', item.product_id)"></i>
				</div>
				<hr class="cart__hr">
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		name: "item",
		props: {
			type: {type: String},
			item: {type: Object},
		}
	}
</script>

<style scoped>

</style>