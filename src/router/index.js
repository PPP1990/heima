import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home }

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const checkToken = window.sessionStorage.getItem("token");
  if (checkToken || to.path == "/login") next();
  else next('/login');
})

export default router
