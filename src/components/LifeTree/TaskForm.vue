<template>
    <form @submit.prevent="saveTask()">
        <input type="text" placeholder="Write title" v-model="task.title" />

        <textarea placeholder="Write a description" rows="3" v-model="task.description"></textarea>

        <button>Save</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Task } from "../../interfaces/Task"
import { createTask } from "../../services/TaskServices"

export default defineComponent({
    data() {
        return {
            task: {} as Task,
        };
    },
    methods: {
        async saveTask() {
            try {
                const res = await createTask(this.task);
                console.log(res);
                this.$router.push({ name: "tasks" });
            } catch (error) {
                console.error(error);
            }
        },
    },
});
</script>