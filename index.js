import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Create from "../views/Create.vue";
import list from "../views/list.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    components: About
   
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/list",
    name: "list",
    component: list,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
