<template>
	<div class="wrapper">
		<div class="top">
			<siteHeader ref="siteHeader"/>
			<siteNav />
			<promo />
			<offer />
			<catalog @add="addItem"/>
			<sales />
			<subscribe />
			<siteFooter />
		</div>
		<copyright />
	</div>
</template>

<script>
	import siteHeader from '../components/header.vue';
	import siteNav from '../components/nav.vue';
	import promo from '../components/promo.vue';
	import offer from '../components/offer.vue';
	import catalog from '../components/catalog.vue';
	import sales from '../components/sales.vue';
	import subscribe from '../components/subscribe.vue';
	import siteFooter from '../components/footer.vue';
	import copyright from '../components/copyright.vue';

	export default {
		name: "app",
		components: {
			'siteHeader': siteHeader,
			'siteNav': siteNav,
			'promo': promo,
			'offer': offer,
			'catalog': catalog,
			'sales': sales,
			'subscribe': subscribe,
			'siteFooter': siteFooter,
			'copyright': copyright,
		},
		data() {
			return {

			}
		},
		methods: {
			// getItems(url) {
			// 	return fetch(url).then(items => items.json());
			// },
      addItem(item) {
        this.$refs.siteHeader.$refs.cartDrop.addItem(item);
      },
		},
    mounted() {
      console.log(this.$refs);
    }
  }
</script>

<style lang="sass">

</style>