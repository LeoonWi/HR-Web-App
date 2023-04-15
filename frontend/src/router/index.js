import { createWebHistory, createRouter } from "vue-router";
import Contract from "@/views/Contract.vue";
import Worker from "@/views/Worker.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;