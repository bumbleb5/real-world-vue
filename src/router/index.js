import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import EventCreate from '../views/EventCreate.vue';
import EventShow from '../views/EventShow.vue';

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
    props: true,
  },
  {
    path: '/event/:id',
    name: 'event-show',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
    component: EventShow,
    props: true,
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
