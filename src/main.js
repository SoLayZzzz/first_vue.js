import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomePage from './feature/HomePage.vue'
import Cart from './feature/Cart.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/cart', component: Cart }
    ]
})

// createApp(App).mount('#app')
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

