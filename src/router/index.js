import { createRouter, createWebHistory } from "vue-router";
import Loginpage from "@/views/Authentication/Loginpage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Loginpage",
      component: Loginpage,
    },
  ],
});

export default router;
