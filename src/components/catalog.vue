<template>
  <section class="feature container">
    <header class="feature__header">Featured Items</header>
    <h2 class="feature__h2">
      Shop for items based on what we featured in this week
    </h2>
    <div class="feature__content" id="feature__content">
      <item
        v-for="item of items"
        type="catalog"
        :key="item.id"
        :item="item"
      />
    </div>
    <div class="feature__button">
      <a href="./product.html" class="button symbol__arrow">Browse All Product</a>
    </div>
  </section>
</template>

<script>
  import item from './item.vue';
  import {getItems} from '../utils/requests.js';

  export default {
    name: "catalog",
    components: {
      'item': item,
    },
    data() {
      return {
        // url: 'https://raw.githubusercontent.com/Akseonov/static/main/psd_1/json/catalog.json',
        url: '/api/catalog',
        items: [],
      }
    },
    methods: {
    },
    mounted() {
      // this.$parent.getItems(this.url)
      //   .then(items => {
      //     this.items = items;
      //   });
      getItems(this.url)
        .then(items => this.items = items);
    }
  }
</script>

<style scoped>

</style>