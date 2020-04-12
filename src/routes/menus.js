
import PageNotFound from '../pages/PageNotFound';
import IndexPage from '../pages/web/index';

export const commonRoutes = [
  {
    path: '/404',
    component: PageNotFound,
  },
];

export const BasicRoutes = [
  {
    path: '/',
    redirect: '/web',
  },
  {
    path: '/web',
    hideInMenu: false,
    title: '接口',
    icon: 'ApiOutlined',
    component: IndexPage
  },
];
