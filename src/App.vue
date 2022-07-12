
<template>
  <LifeTree/>
  <div class="m-auto w-max ">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LifeTree from './components/LifeTree.vue';

export default defineComponent({
  name: "App",
  components: {
    LifeTree,
},
});

</script>

