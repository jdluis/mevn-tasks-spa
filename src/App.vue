
<template>
  <NavBar/>
  <div class="mt-20">
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: "App",
  components: {
    NavBar, Footer,
},
});

</script>

