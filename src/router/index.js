import AdminLayout from "@/layouts/AdminLayout.vue";
import redirectIfGuest from "@/middlewares/redirectIfGuest";
import Education from "@/views/admin/Education.vue";
import Experience from "@/views/admin/Experience.vue";
import Projects from "@/views/admin/Projects.vue";
import User from "@/views/admin/User.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/portfolio/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import middlewarePipeline from "./middlewarePipeline";
import redirectIfAuthenticated from "@/middlewares/redirectIfAuthenticated";
import PortfolioLayout from "@/layouts/PortfolioLayout.vue";
import AboutMe from "@/views/portfolio/AboutMe.vue";
import Services from "@/views/portfolio/Services.vue";
import Skills from "@/views/portfolio/Skills.vue";
import PortolioProjects from "@/views/portfolio/PortolioProjects.vue";

const routes = [
  {
    path: "/",
    component: PortfolioLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About Me",
        component: AboutMe,
      },
      {
        path: "/services",
        name: "Services",
        component: Services,
      },
      {
        path: "/skills",
        name: "Skills",
        component: Skills,
      },
      {
        path: "/projects",
        name: "PortfolioProjects",
        component: PortolioProjects,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { middleware: [redirectIfAuthenticated] },
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "user",
        name: "User",
        component: User,
      },
      {
        path: "education",
        name: "Education",
        component: Education,
      },
      {
        path: "experience",
        name: "Experience",
        component: Experience,
      },
      {
        path: "projects",
        name: "Projects",
        component: Projects,
      },
    ],
    meta: { middleware: [redirectIfGuest] },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = { to, from, next };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
