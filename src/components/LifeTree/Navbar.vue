<template>
    <h1 >Nav Bar</h1>
    <nav class="font-inter flex justify-center">
        <ul class= "text-white flex gap-5 flex-row">
            <li v-for="(route, index) in navLink"
                :key="index"
                class="text-2xl"
            >
            <router-link :to="route.link" > {{route.title}}</router-link>
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
                 link:"/",
                 title: "Home"
                },

                {
                 link: "/tasks/new",
                 title: "List"
                }
            ]
        };
    },
    name: 'Navbar'
})
</script>
