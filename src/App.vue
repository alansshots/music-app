<template>
  <div id="app" class="flex flex-row justify-between items-center">
    <Navbar/>
    <router-view/>
    <Aside/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Aside from './components/Aside.vue';
export default {
  name:'App',
  components: {
    Navbar,
    Aside,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(
  45deg,
  hsl(270deg 100% 98%) 0%,
  hsl(262deg 97% 97%) 11%,
  hsl(255deg 96% 95%) 22%,
  hsl(247deg 96% 94%) 33%,
  hsl(239deg 95% 93%) 44%,
  hsl(231deg 95% 91%) 56%,
  hsl(224deg 95% 90%) 67%,
  hsl(216deg 95% 89%) 78%,
  hsl(208deg 94% 87%) 89%,
  hsl(201deg 94% 86%) 100%
);
}
</style>
