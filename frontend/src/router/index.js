import { createWebHistory, createRouter } from "vue-router";
import Contract from "@/views/Contract.vue";
import Worker from "@/views/Worker.vue";
import updateWorker from "@/views/updateWorker.vue";

const routes = [
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
    path: "/edit/:id",
    name: "updateWorker",
    component: updateWorker
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;