import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from '@/constants';
import { authGuard } from './guard';

const routes = [
  {
    path: ROUTES.ROOT.PATH,
    name: ROUTES.ROOT.NAME,
    redirect: { name: ROUTES.PUBLIC.NAME },
  },
  {
    path: ROUTES.HIDDEN.PATH,
    name: ROUTES.HIDDEN.NAME,
    component: () => import(
      /* webpackChunkName: "blog" */
      '@/components/blog.vue'
    ),
  },
  {
    path: ROUTES.PUBLIC.PATH,
    name: ROUTES.PUBLIC.NAME,
    component: () => import(
      /* webpackChunkName: "public" */
      '@/components/public.vue'
    ),
  },
  {
    path: ROUTES.SIGN_UP.PATH,
    name: ROUTES.SIGN_UP.NAME,
    component: () => import(
      /* webpackChunkName: "sign-up" */
      '@/components/sign-up.vue'
    ),
  },
  {
    path: ROUTES.LOGIN.PATH,
    name: ROUTES.LOGIN.NAME,
    component: () => import(
      /* webpackChunkName: "login" */
      '@/components/login.vue'
    ),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: { name: ROUTES.PUBLIC.NAME },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(authGuard);

export default router;