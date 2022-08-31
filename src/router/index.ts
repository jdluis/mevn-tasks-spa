import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        alias: "/tasks",
        name: "tasks",
        component: () => import("../components/TaskList.vue"),
    },
    {
        path: "/tasks/new",
        alias: "/tasks/new",
        name: "tasks-new",
        component: () => import("../components/TaskForm.vue"),
    },
    {
        path: "/:_id",
        alias: "/tasks/:_id",
        name: "task-details",
        component: () => import("../components/TaskDetails.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;  