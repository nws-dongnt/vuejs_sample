import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: require('./en.json'),
  vi: require('./vi.json'),
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
  fallbackLocale: 'en',
  silentTranslationWarn: true,
});
export default i18n;
