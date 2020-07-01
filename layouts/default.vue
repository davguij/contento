<template>
  <div class="flex h-screen overflow-y-hidden">
    <burger-menu></burger-menu>
    <sidebar></sidebar>
    <main class="p-8 overflow-auto">
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Sidebar from '@/components/sidebar.vue';
import BurgerMenu from '@/components/burger.vue';

export default Vue.extend({
  components: { Sidebar, BurgerMenu },
});
</script>
