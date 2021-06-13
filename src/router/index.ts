import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
//import SiteMain from "../components/SiteMain.vue";
import Projects from "../components/Projects.vue";
import About from "../components/About.vue";
import TestimonialPage from "../components/TestimonialPage.vue";
import Hobby from "../components/Hobby.vue";
import AllSkils from "../components/AllSkill.vue";
import PhotoGallery from "../components/PhotoGallery.vue";
import BikesGallery from "../components/BikesGallery.vue";
import Photography from "../components/photography.vue";
import Education from "../components/Education.vue";
import Professional from "../components/Professional.vue";
import People from "../components/People.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/testimonials",
    name: "TestimonialPage",
    component: TestimonialPage
  },
  {
    path: "/hobbies",
    name: "Hobby",
    component: Hobby
  },
  {
    path: "/skills",
    name: "AllSkils",
    component: AllSkils
  },
  {
    path: "/gallery",
    name: "PhotoGallery",
    component: PhotoGallery
  },
  {
    path: "/bikes",
    name: "BikesGallery",
    component: BikesGallery
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/photography",
    name: "Photography",
    component: Photography
  },
  {
    path: "/education",
    name: "Education",
    component: Education
  },
  {
    path: "/professional",
    name: "Professional",
    component: Professional
  },
  {
    path: "/people",
    name: "People",
    component: People
  }  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
