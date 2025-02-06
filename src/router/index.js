import AdminLayout from "@/layouts/AdminLayout.vue";
import Education from "@/views/admin/Education.vue";
import Experience from "@/views/admin/Experience.vue";
import Projects from "@/views/admin/Projects.vue";
import User from "@/views/admin/User.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/portfolio/Home/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
