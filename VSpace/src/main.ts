import './assets/main.css'
import './assets/global.css'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import App from './App.vue'
import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import PrincipalPage from './views/PrincipalPage.vue' 
import RegisterPage from './views/RegisterPage.vue'


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: { title: 'Login | Space Academy' }
  },
  {
    path: '/principal',
    name: 'PrincipalPage',
    component: PrincipalPage,
    meta: { title: 'Home | Space Academy', requiresAuth: true } 
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: { title: 'Cadastre-se | Space Academy' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

interface RouteMeta {
  title?: string;
}

router.afterEach((to) => {
  const meta = to.meta as RouteMeta;
  document.title = meta.title || 'Space Academy';
});


createApp(App)
  .use(router)
  .mount('#app')