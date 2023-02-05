import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = {
  name: 'App',
  data: function () {
    return { counter: 0 };
  },
};
const app = createApp(App);
const vm = app.mount('#app');
