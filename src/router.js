import { createWebHistory, createRouter } from 'vue-router';
import AboutIu from './components/AboutIu.vue';
import GalleryIu from './components/GalleryIu.vue';
import HomePage from './components/HomePage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutIu,
  },
  {
    path: '/gallery',
    component: GalleryIu,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
