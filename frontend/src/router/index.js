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

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contract",
    name: "Contract",
    component: Contract
  },
  {
    path: "/worker",
    name: "Worker",
    component: Worker
  },
  {
    path: "/edit/worker/:id",
    name: "updateWorker",
    component: updateWorker
  },
  {
    path: "/create/worker",
    name: "createWorker",
    component: createWorker
  },
  {
    path: "/dept",
    name: "Dept",
    component: Dept
  },
  {
    path: "/edit/dept/:id",
    name: "updateDept",
    component: updateDept
  },
  {
    path: "/create/dept",
    name: "createDept",
    component: createDept
  },
  {
    path: "/sick",
    name: "Sick",
    component: Sick
  },
  {
    path: "/vacation",
    name: "Vacation",
    component: Vacation
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;