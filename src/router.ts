import { createRouter, createWebHistory } from 'vue-router';
import Relays from './pages/relays.vue';
import Schedules from './components/schedules.vue';
import { usePageStore } from './stores/page-store.ts';

const routes = [
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
  pageStore.setPage(to.name as string);
  next();
});

export default router;
