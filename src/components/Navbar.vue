<template>
    <h1>Nav Bar</h1>
    <nav>
        <ul>
            <li>
                <a href="/">Tasks List</a>
            </li>
            <li>
                <a href="/tasks/new">Create Task</a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navbar'
})
</script>
