import { createRouter, createWebHistory } from 'vue-router';
import Relays from './pages/relays.vue';
import Schedules from './pages/schedules.vue';
import { usePageStore } from './stores/page-store.ts';
import Home from './pages/home.vue';
import Boards from './pages/boards.vue';

const routes = [
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

router.beforeEach((to, _from, next) => {
  const pageStore = usePageStore();
  pageStore.setPage(to.name as string);
  next();
});

export default router;
