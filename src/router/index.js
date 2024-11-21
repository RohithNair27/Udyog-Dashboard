import { createRouter, createWebHistory } from "vue-router";
import Loginpage from "@/views/Authentication/Loginpage.vue";
import SignupPage from "../views/Authentication/SignupPage.vue";
import Employees from '../views/Main/Employees.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Loginpage",
      component: Loginpage,
    },
    {
      path: "/signup",
      name: "SignupPage",
      component: SignupPage,
    },
    {
      path: "/employees",
      name: "Employees",
      component: Employees,
    },
  ],
});

export default router;
