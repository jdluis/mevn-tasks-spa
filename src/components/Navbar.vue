<template>
    <nav class="font-inter mt-8 flex justify-center">
        <ul class="text-white flex-wrap flex gap-5 flex-row">
            <li v-for="(route, index) in navLink" :key="index" class="text-2xl">
                <router-link :to="route.link">{{ route.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            navLink:
                [
                    {
                        link: "/",
                        title: "List",
                        description: "",
                        date: "1998",
                    },

                    {
                        link: "/tasks/new",
                        title: "Create new",
                        description: "",
                        date: "1999",
                    }
                ],
        };
    },
    name: 'Navbar'
})
</script>
