<template>
    <form @submit.prevent="saveTask()" class="w-full m-auto max-w-lg border-spacing-24 p-20 bg-navy bg-opacity-40 border">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                >Title of Task</label>
                <input
                    type="text"
                    placeholder="Jane"
                    v-model="task.title"
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
                    placeholder="Jane"
                    v-model="task.date"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                />
                <p>{{task.date}}</p>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <textarea placeholder="Write a description" rows="5" v-model="task.description"
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
                        v-model="task.category"
                    >
                        <option disabled value="">Please select one</option> 
                        <option value="healthy">Healthy</option>
                        <option value="events">Events</option>
                        <option value="dates">Dates</option>
                        <option value="work">Work</option>
                    </select>
                    <p>{{task.category}}</p>
                    <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                        <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <button class="py-2 px-4 bg-navy text-green rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" >Save</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Task } from "../interfaces/Task"
import { createTask } from "../services/TaskServices"

export default defineComponent({
    data() {
        return {
            task: {} as Task,
            selected: '',
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