import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ProfileDetail from '../views/ProfileDetail.vue';

//IMPORT HERE

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/all-profile',
    name: 'all_profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AllProfile.vue')
  },
  {
    path: '/profile-detail/create',
    name: 'profile_detail_create',
    component: ProfileDetail
  },
  {
    path: '/profile-detail/update/:id',
    name: 'profile_detail_update',
    component: ProfileDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
