<template>
    <h1>Task: {{currentTask.title}}</h1>

    <form @submit.prevent="handleUpdate()"> 
        <input v-model="currentTask.title" type="text"/>
        <textarea v-model="currentTask.description" rows="3"></textarea>

        <button>Update</button>
    </form>

    <button @click="handleDelete()">Delete</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "../../interfaces/Task";
import { deleteTask, getTask, updateTask } from "../../services/TaskServices";

export default defineComponent({
  name: "task",
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
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
        }
      } catch (error) {
        console.error(error);
      }
    },
    async handleDelete() {
      try {
        if (typeof this.$route.params._id === "string") {
          deleteTask(this.$route.params._id);
          this.$router.push("/");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    if (typeof this.$route.params._id === "string") {
      this.loadTask(this.$route.params._id);
    }
  },
});
</script>