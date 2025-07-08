import './assets/main.css'

import { compile, createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'
import Setting from './pages/Setting.vue'
import Collection from './components/Collection.vue'
import Pricing from './components/Pricing.vue'
import PricingList from './components/PricingList.vue'
import Project from './pages/Project.vue'
import ProjectPage from './pages/ProjectPage.vue'
import Registration from './pages/Registration.vue'
import User from './pages/User.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  
  { path: '/setting',component: Setting, children:[
    { path: '', component: Collection},
    { path: 'pricing', component: PricingList}
  ]
  },
  { path: '/project', component: Project},
  { path: '/project/:name', component: ProjectPage},
  { path: '/register', component: Registration},
  { path: '/user', component: User},
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
