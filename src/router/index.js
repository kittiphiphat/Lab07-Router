import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/mainpage.vue'
import Newcard from '../components/Newcard.vue'

import ANewcard_01 from '../components/Anewcard_1.vue';
import ANewcard_02 from '../components/Anewcard_2.vue';
import ANewcard_03 from '../components/Anewcard_3.vue';
import ANewcard_04 from '../components/Anewcard_4.vue';
import ANewcard_05 from '../components/Anewcard_5.vue';
import ANewcard_06 from '../components/Anewcard_6.vue';
import ANewcard_07 from '../components/Anewcard_7.vue';
import ANewcard_08 from '../components/Anewcard_8.vue';


const shopRoutes = [
  { name: 'news_1', component: ANewcard_01, shop: 'THAY Nimman' },
  { name: 'news_2', component: ANewcard_02, shop: '86’s Room' },
  { name: 'news_3', component: ANewcard_03, shop: 'Wander Night'},
  { name: 'news_4', component: ANewcard_04, shop: 'East Bar'},
  { name: 'news_5', component: ANewcard_05, shop: 'SOPA Cafe'},
  { name: 'news_6', component: ANewcard_06, shop: 'CMBC'},
  { name: 'news_7', component: ANewcard_07, shop: 'ฉลุย Cafe'},
  { name: 'news_8', component: ANewcard_08, shop: 'Hom Bar Chiang Mai'},
];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
