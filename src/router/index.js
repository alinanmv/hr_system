import Vue from 'vue';
import VueRouter from 'vue-router';

import login from '../layouts/login.vue';
import profile from '../layouts/profile.vue';
import dashboard from '../layouts/dashboard.vue';
import employee from '../layouts/Employee.vue';
import AnalyticsPage from '../layouts/AnalyticsPage.vue';
import auth from '../layouts/auth.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/', component: login },
  { path: '/login', component: login },
  { path: '/dashboard', component: dashboard },
  { path: '/employee', component: employee },
  { path: '/profile', component: profile },
  { path: '/analytics_page', component: AnalyticsPage },
  {path: '/auth', component: auth}
];

const router = new VueRouter({
  routes,
});

export default router;
