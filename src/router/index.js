import AdminLayout from "@/layouts/AdminLayout.vue";
import Education from "@/views/admin/Education/Education.vue";
import User from "@/views/admin/User/User.vue";
import Home from "@/views/portfolio/Home/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "user",
        name: "user",
        component: User,
      },
      {
        path: "education",
        name: "education",
        component: Education,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
