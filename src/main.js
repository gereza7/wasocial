import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './main.css'

createApp(App)
  .use(router)
  .mount('#app')

import Vue from 'vue'

import VueBottomNavigation from 'bottom-navigation-vue'
import router from './router'
Vue.use(VueAxios, axios)
Vue.use(VueBottomNavigation)
