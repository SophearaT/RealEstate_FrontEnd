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
import Properties from './pages/Properties.vue'
import ProjectPage from './pages/ProjectPage.vue'
//import Registration from './pages/Registration.vue'
import User from './pages/User.vue'
import ContactForm from './pages/ContactForm.vue'
import { createI18n } from 'vue-i18n'
import Branding_Page from './pages/Branding_Page.vue'

import MainDashboard from './pages/MainDashboard.vue'
import UserDashboardContent from './components/UserDashboardContent.vue'
import PropertyDashboardContent from './components/PropertyDashboardContent.vue'
//import UserForm from './components/UserForm.vue'
import Registration from './pages/Registration.vue'
import HeaderSide from './components/HeaderSide.vue'
import LoginForm from './pages/LoginForm.vue'
import SignUp from './pages/SignUp.vue'
import UserCRUD from './pages/UserCRUD.vue'
import PropertyDetail from './pages/PropertyDetail.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/branding', component: Branding_Page },
  { path: '/header', component: HeaderSide },
  
  { path: '/setting',component: Setting, children:[
    { path: '', component: Collection},
    { path: 'pricing', component: PricingList}
  ]
  },
  { path: '/properties', component: Properties},
  { path: '/propertydetail', component: PropertyDetail },
  { path: '/project/:name', component: ProjectPage},
  { path: '/login', component: LoginForm},
  { path: '/signup', component: SignUp},
  { path: '/register', component: Registration},
  { path: '/user', component: User},
  { path: '/contact', component: ContactForm},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/dashboard', component: MainDashboard, meta: { requiresAuth: true }, children:[
          { path: '', name:'dashboard' ,component: UserDashboardContent},
          { path: 'property',name:'property', component: PropertyDashboardContent},
    
  ] },
  { path: '/edit', name:'edit', component: UserCRUD },
 

]

const router = createRouter({
  linkActiveClass: 'font-bold',
  linkExactActiveClass: 'font-bold',
  history: createWebHistory(),
  routes
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) next('/login')
  else next()
})

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            hello: 'hello world',
            about: 'About',
            register: 'Register',
            user: 'User',
            services: 'Services',
            projects: 'Projects',
            property: 'Property',
            setting: 'Setting',
            Contact: 'Contact'
        },
        khm: {
            khmer: 'ខ្មែរ',
            hello: 'សួស្តី​ពិភពលោក',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            user: 'អ្នកប្រើប្រាស់',
            services: 'សេវាកម្ម',
            projects: 'គម្រោង',
            property: 'អចលនទ្រព្យ',
            setting: 'ការកំណត់',
            Contact: 'ទំនាក់ទំនង'
        }
    }
}
)
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
