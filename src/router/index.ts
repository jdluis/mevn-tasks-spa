import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        alias: "/tasks",
        name: "tasks",
        component: () => import("../components/LifeTree/TaskList.vue"),
    },
    {
        path: "/",
        alias: "/tasks/new",
        name: "tasks-new",
        component: () => import("../components/LifeTree/TaskForm.vue"),
    },
    {
        path: "/:_id",
        alias: "/tasks/:_id",
        name: "task-details",
        component: () => import("../components/LifeTree/TaskDetails.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;  