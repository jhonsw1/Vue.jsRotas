import Vue from 'vue'
import VueRouter from 'vue-router'
import PainelConsulta from '../views/PainelConsulta.vue'
import PainelDados from '../components/PainelDados.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },  
  {
    path: '/PainelConsulta',
    name: 'PainelConsulta',
    component: PainelConsulta
  },
  {
    path: '/painelDados',
    name: 'PainelDados',
    component: PainelDados
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
