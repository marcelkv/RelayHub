import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Relays from './pages/relays.vue';
import Schedules from './pages/schedules.vue';
import { usePageStore } from './stores/page-store';
import Home from './pages/home.vue';
import Boards from './pages/boards.vue';
import Board from './pages/board.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/boards',
    name: 'boards',
    component: Boards,
  },
  {
    path: '/board/',
    name: 'board',
    component: Board,
  },
  {
    path: '/relays',
    name: 'relays',
    component: Relays,
  },
  {
    path: '/schedules',
    name: 'schedules',
    component: Schedules,
  },
  { path: '/:catchAll(.*)', redirect: '/relays' },
];

const router = createRouter({
  history: createWebHistory('/RelayHub'),
  routes,
});

router.beforeEach((to, from, next) => {
  const pageStore = usePageStore();

  if ((from.name as string) !== pageStore.navigateBackPage) {
    pageStore.navigateBackPage = null;
  }

  pageStore.setPage(to.name as string);
  next();
});

export default router;
