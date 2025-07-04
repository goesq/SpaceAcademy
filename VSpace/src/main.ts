import './assets/main.css'
import './assets/global.css'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import App from './App.vue'
import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import PrincipalPage from './views/PrincipalPage.vue' // Importação adicionada

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/principal', // Você pode alterar o path conforme necessário
    name: 'PrincipalPage',
    component: PrincipalPage,
    // meta: { requiresAuth: true } // Descomente se precisar de autenticação
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')