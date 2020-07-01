<template>
  <nav
    class="flex-col justify-between flex-none w-screen p-8 bg-gray-300 lg:w-1/4 xl:w-1/5 lg:flex"
    :class="{ hidden: !isSidebarVisible }"
  >
    <div>
      <div @click="navigateTo('/')">
        <img
          class="w-full max-w-md mb-6 cursor-pointer"
          src="https://via.placeholder.com/200x75"
        />
      </div>
      <ul
        class="text-xl border-t-2 border-b-2 border-gray-200 divide-y-2 divide-gray-200 lg:text-base"
      >
        <li
          v-for="(menuItem, index) in menu"
          :key="index"
          class="py-3 font-light text-gray-600 cursor-pointer select-none hover:text-gray-900"
          :class="{ 'font-bold': isPathActive(menuItem.path) }"
          exact-active-class="font-bold"
          @click="navigateTo(menuItem.path)"
        >
          {{ menuItem.title }}
        </li>
      </ul>
    </div>
    <div class="text-sm">
      Proudly powered by contentio
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

@Component
export default class Sidebar extends Vue {
  @State menu!: any[];
  @State isSidebarVisible!: boolean;
  @Action toggleSidebar!: () => void;

  async navigateTo(url: string) {
    await this.$router.push(url);
    this.toggleSidebar();
  }

  isPathActive(path: string) {
    return this.$route.path === path;
  }
}
</script>
