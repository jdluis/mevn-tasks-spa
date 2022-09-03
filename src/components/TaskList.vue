<template>
    <div class="text-left">
        <h1 class="text-center underline text-4xl text-green p-5">Make Your Day</h1>
    </div>

    <div key="index" class="absolute left-1/2 bg-navy pl-4 pr-4">
        <span @change="loadTasks()" class="text-green">{{ filterCategory.length }}</span>
    </div>
    <div class="flex align-middle justify-center">
        <table
            class="table-fixed w-100 border-separate border-white border-2 bg-light_slate border-spacing-6"
        >
            <thead>
                <tr class="text-xs md:text-base">
                    <th>
                        <div class="flex">
                            <!-- <h3>Filter Category</h3> -->
                            <select
                                class="block cursor-pointer w-100 text-center border 
                                text-gray-700 rounded leading-tight 
                                focus:outline-none focus:bg-white focus:border-gray-500"
                                v-model="categorySelected"
                                @change="filterFromCategory"
                            >
                                <option selected value="all">All</option>
                                <option value="healthy">Healthy</option>
                                <option value="events">Events</option>
                                <option value="dates">Dates</option>
                                <option value="work">Work</option>
                            </select>
                        </div>
                    </th>
                    <th>Title</th>
                    <th class="hidden md:block">Description</th>
                    <th>Date of finish</th>
                    <th class="hidden md:block">State</th>
                    <th>Config</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="text-center text-sm normal-case opacity-60"
                    v-for="(task, index) in filterCategory"
                    :key="index"
                >
                    <td>{{ task.category }}</td>
                    <td>{{ task.title }}</td>
                    <td class="hidden md:block">{{ task.description }}</td>
                    <td>{{ formatDate(task.date) }}</td>
                    <td @click="handleCheckboxStatus(task)" class="hidden md:block">
                        <spam
                            class="cursor-pointer hover:opacity-50"
                            :style="task.status ? 'color: green' : 'color:#C55300'"
                        >{{ task.status ? "Finish" : "Doing" }}</spam>
                        <input
                            :id="'status_change' + task._id"
                            type="checkbox"
                            v-model="task.status"
                            :checked="task.status"
                            class="text-8xl invisible"
                        />
                    </td>
                    <td v-if="!task.status" id="editBtn" class="opacity-100 text-green_normal">
                        <button @click="$router.push(`/tasks/${task._id}`)" class="mx-auto text-xl">
                            <fa icon="gears" />
                        </button>
                    </td>
                    <td v-if="task.status" id="deleteBtn" class="opacity-100 text-red">
                        <button
                            :key="index"
                            class="hover:bg-opacity-50 text-xl"
                            @click="handleDelete(task)"
                        >
                            <fa icon="warning" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '../interfaces/Task';
import { getTasks, deleteTask } from '../services/TaskServices';

export default defineComponent({
    name: "tasks-list",
    data() {
        return {
            currentTask: {} as Task,
            tasks: [] as Task[],
            filterCategory: [] as Task[],
            categorySelected: "all" as string,
        };
    },
    methods: {
        async loadTasks() {
            try {
                const res = await getTasks();
                this.tasks = res.data
                this.filterCategory = res.data
            } catch (error) {
                console.log(error);
            }
        },
        async handleCheckboxStatus(task: any) {
            try {
                let inputStatus = document.getElementById("status_change" + task._id);
                inputStatus?.click();
            } catch (error) {
                console.error(error);
            }
        },
        async handleDelete(task: any) {
            try {
                if (typeof task._id === "string") {
                    deleteTask(task._id);
                    task.length - 1
                    this.$router.push("");
                }
            } catch (error) {
                console.error(error);
            }
        },
        formatDate(dateString: string) {
            const date = new Date(dateString);
            // Then specify how you want your dates to be formatted
            try {
                return new Intl.DateTimeFormat('es', { dateStyle: 'short' }).format(date);
            } catch (error) {
                return "No Date"
            }
        },
        filterFromCategory() {
            try {
                if (this.categorySelected == "all") {
                    this.filterCategory = this.tasks
                } else {
                    this.filterCategory = this.tasks.filter(word => word.category == this.categorySelected);
                }
                return this.filterCategory;
            } catch (error) {
                return "error"
            }
        }
    },
    mounted() {
        this.loadTasks();
    }
})
</script>