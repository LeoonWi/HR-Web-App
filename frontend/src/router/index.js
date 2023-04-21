import { createWebHistory, createRouter } from "vue-router";
import Contract from "@/views/Contract.vue";
import Worker from "@/views/Worker/Worker.vue";
import updateWorker from "@/views/Worker/updateWorker.vue";
import createWorker from "@/views/Worker/createWorker.vue";
import Home from "@/views/Home.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;