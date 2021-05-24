import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
import '@/assets/font/iconfont.css'
const Store = require('electron-store');
const storage = new Store();


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$storage = storage

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
