import { createApp } from 'vue'
import App from './App.vue'

import './main.css'

createApp(App)
  .use(router)
  .mount('#app')

import Vue from 'vue'

import VueBottomNavigation from 'bottom-navigation-vue'
import router from './router'

Vue.use(VueBottomNavigation)
