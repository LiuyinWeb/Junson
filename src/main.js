import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import ElementUI from 'element-ui'
import api from "./utils/util";
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/swiper-bundle.min.css';

Vue.prototype.$api = api;

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
