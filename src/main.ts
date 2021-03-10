import Vue from 'vue';
import App from './App.vue';
import router from './router';

//i18n
import VueI18n from 'vue-i18n';
import i18n from './langs/i18n';
Vue.use(VueI18n);

//element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

const mainApp = new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
export default mainApp;
