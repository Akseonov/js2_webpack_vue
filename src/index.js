// import bootstrap from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.sass';

import Vue from 'vue';
import App from './views/main.vue';

new Vue({
  render: d => d(App)
}).$mount('#app');