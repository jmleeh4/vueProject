import { createApp } from 'vue'
import App from './App.vue'
//'./router/index.js'에서 export 한 라우터를 main.js 에서 import 하여 받는다.
import router from './router'
import store from './store/index.js'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

