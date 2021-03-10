import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
Vue.use(VueRouter);

const Dashboard = () => import('../views/Dashboard.vue');
const AllProfile = () => import('../views/AllProfile.vue');
const ProfileDetail = () => import('../views/ProfileDetail.vue');

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
    component: AllProfile
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
