<template>
    <h1>task list</h1>

    <ul>
        <li 
        style="cursor: pointer"
        class="text-3xl font-bold underline"
        v-for="(task, index) in tasks"
        :key="index"
        @click="$router.push(`/tasks/${task._id}`)" 
        >
            {{ index + 1 }}
            {{ task.title }}
        </li>
    </ul>

</template>


<script lang="ts">
import {defineComponent} from 'vue';
import { Task } from '../interfaces/Task';
import { getTasks } from '../services/TaskServices';

export default defineComponent({
    name: "tasks-list",
    data () {
        return {
            tasks: [] as Task[],
        };
    },
    methods: {
        async loadTasks() {
            try {
                const res = await getTasks();
                this.tasks = res.data
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.loadTasks();
    }
})
</script>