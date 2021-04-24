<template>
  <header class="header">
    <div class="header__content container">
      <div class="header__block">
        <a href="#" class="header__logo">
          <img src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/logo.png"
               alt="logo">BRAN<span>D</span>
        </a>
        <form class="header__form" action="#">
          <details class="form__browse__button">
            <summary class="form__browse symbol">Browse</summary>
            <div class="form__drop">
              <span class="drop__name">Women</span>
              <hr class="drop__hr">
              <ul class="drop__menu">
                <li><a href="./product.html" class="drop__a">Dresses</a></li>
                <li><a href="./product.html" class="drop__a">Tops</a></li>
                <li><a href="./product.html" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="./product.html" class="drop__a">Jackets/Coats</a></li>
                <li><a href="./product.html" class="drop__a">Blazers</a></li>
                <li><a href="./product.html" class="drop__a">Denim</a></li>
                <li><a href="./product.html" class="drop__a">Leggings/Pants</a></li>
                <li><a href="./product.html" class="drop__a">Skirts/Shorts</a></li>
                <li><a href="./product.html" class="drop__a">Accessories </a></li>
              </ul>
              <span class="drop__name">Men</span>
              <hr class="drop__hr">
              <ul class="drop__menu">
                <li><a href="./product.html" class="drop__a">Dresses</a></li>
                <li><a href="./product.html" class="drop__a">Tops</a></li>
                <li><a href="./product.html" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="./product.html" class="drop__a">Jackets/Coats</a></li>
                <li><a href="./product.html" class="drop__a">Blazers</a></li>
                <li><a href="./product.html" class="drop__a">Denim</a></li>
                <li><a href="./product.html" class="drop__a">Leggings/Pants</a></li>
              </ul>
            </div>
          </details>
          <label for="header-input"></label>
          <input class="header__form__input" type="text" id="header-input" name="header-input"
                 placeholder="Search for Item..." pattern="\S+[А-яа-я]">
          <button class="header__form__button"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <div class="header__block">
        <cartDrop ref="cartDrop"/>
        <a href="#" class="header__cart__button symbol">My Account</a>
      </div>
    </div>
  </header>
</template>

<script>
  import cartDrop from '../components/cartDrop.vue';

  export default {
    name: "siteHeader",
    components: {
      'cartDrop': cartDrop,
    }
  }
</script>

<style scoped>

</style>