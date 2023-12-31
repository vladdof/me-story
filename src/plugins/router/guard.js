import { ROUTES } from '@/constants';

export const authGuard = (to, from, next) => {
  const authRequired = ROUTES.BLOG.PATH.includes(to.path);
  const token = localStorage.getItem('token');

  if (authRequired && !token) {
    next({ name: ROUTES.SIGN_UP.NAME });
  } else if (!authRequired && token) {
    next({ name: ROUTES.BLOG.NAME });
  } else {
    next();
  }
};
