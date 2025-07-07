import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]

const router = createRouter({
  linkActiveClass: 'font-bold',
  linkExactActiveClass: 'font-bold',
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
