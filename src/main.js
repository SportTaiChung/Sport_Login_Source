import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import device from "current-device";

createApp(App).use(store).use(router).use(device).mount('#app')
