import Vue from 'vue';
import Router from 'vue-router';
import HelloVue from './views/HelloVue.vue';
import Home from './views/Home.vue';
import ConcertMap from './views/ConcertMap.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/map',
      name: 'concertmap',
      component: ConcertMap,
    },
    {
      path: '/hellovue',
      name: 'hellovue',
      component: HelloVue,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
