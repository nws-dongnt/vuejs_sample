import Vue from 'vue';
import App from './App.vue';
import router from './router';

//i18n
import VueI18n from 'vue-i18n';
import i18n from './langs/i18n';
Vue.use(VueI18n);

//sidebar
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
Vue.use(VueSidebarMenu);

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);


//element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
