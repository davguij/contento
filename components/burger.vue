<template>
  <button class="absolute top-0 right-0 m-4 lg:hidden" @click="toggleSidebar">
    <close-icon v-if="isSidebarVisible" class="w-8 h-8"></close-icon>
    <burger-menu-icon v-else class="w-8 h-8"></burger-menu-icon>
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import BurgerMenuIcon from '@/assets/icons/burger-menu.svg?inline';
import CloseIcon from '@/assets/icons/close.svg?inline';

@Component({ components: { BurgerMenuIcon, CloseIcon } })
export default class BurgerMenu extends Vue {
  @State menu!: any[];
  @State isSidebarVisible!: boolean;
  @Action toggleSidebar!: () => void;
}
</script>
