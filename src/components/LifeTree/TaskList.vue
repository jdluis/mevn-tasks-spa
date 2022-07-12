<template>
    <h1 class=" text-center underline text-4xl text-green p-5 ">Life Tree</h1>

    <div class="container flex flex-col ">
        <div>
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
        </div>

        <div>
            <span>-----</span>
        </div>

        <div>
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
        </div>

    </div>


</template>


<script lang="ts">
import {defineComponent} from 'vue';
import { Task } from '../../interfaces/Task';
import { getTasks } from '../../services/TaskServices';


//MIRAR COMO AÑADIR UNA FECHA UNICA CAADA VEZ QUE SE CREE LA TAREA

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