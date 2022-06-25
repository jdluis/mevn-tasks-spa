import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "tasks",
        component: () => import("../components/TaskList.vue"),
    },
    {
        path: "/tasks/new",
        name: "tasks-new",
        component: () => import("../components/TaskForm.vue"),
    },
    {
        path: "/tasks/:id",
        name: "task-details",
        component: () => import("../components/TaskDetails.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;  