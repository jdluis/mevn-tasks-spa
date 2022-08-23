<template>
  <div class=" pl-20 underline ">
    <h1><span class="bg-green_normal">EDIT-></span> {{ currentTask.title }}</h1>
  </div>

  <form class="w-full lg:w-1/2 p-20 lg-p-0 lg:m-auto" @submit.prevent="handleUpdate()">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >Title of Task</label>
        <input
          type="text"
          placeholder="Jane"
          v-model="currentTask.title"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >Date of finish</label>
        <input
          type="date"
          v-model="currentTask.date"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <textarea
        placeholder="Write a description"
        rows="5"
        v-model="currentTask.description"
        class="w-full"
      ></textarea>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-3/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >Category</label>
        <div class="relative">
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            v-model="currentTask.category"
          >
            <option disabled value="">Please select one</option>
            <option value="healthy">Salud</option>
            <option value="events">Eventos</option>
            <option value="dates">Citas</option>
            <option value="work">Trabajo</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </form>
  <div class="p-5 text-center">
    <button class="bg-green_normal p-4 hover:bg-opacity-50">Update</button>
    <button class="bg-red p-4 hover:bg-opacity-50" @click="handleDelete()">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "../interfaces/Task";
import { deleteTask, getTask, updateTask } from "../services/TaskServices";

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