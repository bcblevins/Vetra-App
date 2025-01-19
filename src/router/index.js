import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../main'
import HomeView from '../views/HomeView.vue'
import { supabase } from '@/services/supabase/supabaseClient';
import { getUser } from '@/services/supabase/userServiceSP';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pet/:id',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/pet/:id/tests/:testId',
      name: 'tests',
      component: () => import('../views/TestsView.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/NotificationsView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/pet/:id/prescriptions',
      name: 'rx',
      component: () => import('../views/MedsView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/NotificationsView.vue')
    },
    {
      path: '/',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  supabase.auth.getUser().then(({data, error}) => {
    const user = data.user
    if (to.name !== 'register' && to.name !== 'login' && !user) {
      next({ name: 'login' })
    } else if (store.state.user.empty && user !== null) {
      getUser(user.id).then((data) => {
        store.commit("SET_USER", data)
        next()
      })
    } else {
      next()
    }
  })
});

export default router
