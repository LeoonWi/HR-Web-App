import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Contract from "@/views/Contract/Contract.vue";
import Worker from "@/views/Worker/Worker.vue";
import updateWorker from "@/views/Worker/updateWorker.vue";
import createWorker from "@/views/Worker/createWorker.vue";
import Dept from "@/views/Dept/Dept.vue";
import updateDept from "@/views/Dept/updateDept.vue";
import createDept from "@/views/Dept/createDept.vue";
import Sick from "@/views/Sick.vue";
import Vacation from "@/views/Vacation.vue";
import Reference from "@/views/reference.vue";
import login from "@/views/login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {layout: 'main', auth: true},
    component: Home
  },
  {
    path: "/contract",
    name: "Contract",
    meta: {layout: 'main', auth: true},
    component: Contract
  },
  {
    path: "/worker",
    name: "Worker",
    meta: {layout: 'main', auth: true},
    component: Worker
  },
  {
    path: "/edit/worker/:id",
    name: "updateWorker",
    meta: {layout: 'main', auth: true},
    component: updateWorker
  },
  {
    path: "/create/worker",
    name: "createWorker",
    meta: {layout: 'main', auth: true},
    component: createWorker
  },
  {
    path: "/dept",
    name: "Dept",
    meta: {layout: 'main', auth: true},
    component: Dept
  },
  {
    path: "/edit/dept/:id",
    name: "updateDept",
    meta: {layout: 'main', auth: true},
    component: updateDept
  },
  {
    path: "/create/dept",
    name: "createDept",
    meta: {layout: 'main', auth: true},
    component: createDept
  },
  {
    path: "/sick",
    name: "Sick",
    meta: {layout: 'main', auth: true},
    component: Sick
  },
  {
    path: "/vacation",
    name: "Vacation",
    meta: {layout: 'main', auth: true},
    component: Vacation
  },
   {
    path: "/reference",
    name: "Reference",
    meta: {layout: 'main', auth: true},
    component: Reference
   },
   {
    path: "/login",
    name: "Login",
    meta: {layout: 'empty'},
    component: login
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;
  if(requireAuth && !localStorage.getItem('password')) {
    next('/login');
  } else {
    next();
  }
});

export default router;