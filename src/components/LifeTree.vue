<template>
    <Navbar/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './LifeTree/Navbar.vue';


export default defineComponent({
    name: 'LifeTree',
    components: {
    Navbar,
},
})
</script>
