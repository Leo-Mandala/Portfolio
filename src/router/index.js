import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/Home.vue';
import AboutView from '../components/About.vue';
import SkillsView from '../components/Skills.vue';
import ProjectsView from '../components/Projects.vue';
import ContactView from '../components/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
});

export default router;
