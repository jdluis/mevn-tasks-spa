<template>
<div class="bg-navy fixed top-0 border-b-2 border-white m-auto  w-screen ">
    <nav class="font-inter">
        <ul class="text-white flex-wrap flex gap-5 flex-row ">
            <li 
                v-for="(route, index) in navLink" 
                :key="index" 
                class="text-2xl h-14 pt-3 active:bg-opacity-50 hover:bg-light_slate hover:text-primary_Black">
                <router-link 
                    class="h-full w-full p-5" 
                    :to="route.link">{{ route.title }}
                </router-link>
            </li>
        </ul>
    </nav>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navbar',
    data() {
        return {
            clicked: false,
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
    methods: {
        
    }
})
</script>
