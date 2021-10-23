import App from './App.vue'
import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
import { store } from './store/index.js';

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
