import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './main.css'
import VueBottomNavigation from 'bottom-navigation-vue'
import router from './router'



createApp(App)
  .use(router, VueAxios, axios, VueBottomNavigation)
  .mount('#app')

