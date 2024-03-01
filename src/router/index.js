import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailCatatan from '../views/DetailCatatan.vue'
import FormCatatan from '../views/FormCatatan.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'detail',
      component: DetailCatatan
    },
    {
      path: '/add',
      name: 'add',
      component: FormCatatan
    },
    {
      path: '/:id/edit',
      name: 'edit',
      component: FormCatatan
    },
  ]
})

export default router
