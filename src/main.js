import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store/users';
import VueI18n from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: { en, ru },
});
i18n.setLocaleMessage('en', en);
new Vue({
  i18n,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
