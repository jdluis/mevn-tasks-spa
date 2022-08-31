<template>
    <div class="text-left">
        <h1 class="text-center underline text-4xl text-green p-5">Make Your Day</h1>
    </div>
    <div class="flex align-middle justify-center">
        <table
            class="table-fixed w-100 border-separate border-white border-2 bg-light_slate border-spacing-6"
        >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date of finish</th>
                    <th>State</th>
                    <th>Config</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center text-sm normal-case " v-for="(task, index) in tasks" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ task.title }}</td>
                    <td>{{ task.description }}</td>
                    <td>{{ formatDate(task.date)}}</td>
                    <td>
                        <input
                            @click="handleUpdate()"
                            type="checkbox"
                            v-model="currentTask.status"
                            :checked="currentTask.status"
                        />
                    </td>
                    <button @click="$router.push(`/tasks/${task._id}`)" class="mx-auto">Edit</button>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '../interfaces/Task';
import { getTasks, updateTask, getTask } from '../services/TaskServices';


//MIRAR COMO AÑADIR UNA FECHA UNICA CAADA VEZ QUE SE CREE LA TAREA

export default defineComponent({
    name: "tasks-list",
    data() {
        return {
            currentTask: {} as Task,
            tasks: [] as Task[],
            titleHead: [

            ]
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
        async loadTask(id: string) {
            try {
                const { data } = await getTask(id);
                this.currentTask = data;
            } catch (error) {
                console.error(error);
            }
        },
        async handleUpdate() {
            try {
                if (typeof this.$route.params._id === "string") {
                    await updateTask(this.$route.params._id, this.currentTask);
                    this.$router.push("/");
                    console.log(this.currentTask)
                }
            } catch (error) {
                console.error(error);
            }
        },
         formatDate(dateString:string) {
            const date = new Date(dateString);
                // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('es', {dateStyle: 'short'}).format(date);
        }
    },
    mounted() {
        this.loadTasks();
        if (typeof this.$route.params._id === "string") {
            this.loadTask(this.$route.params._id);
        }
    }
})
</script>