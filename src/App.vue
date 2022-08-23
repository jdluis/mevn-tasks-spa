
<template>
      <NavBar/>
  <div class="mt-20">
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/Navbar.vue'

export default defineComponent({
  name: "App",
  components: {
    NavBar,
},
});

</script>

