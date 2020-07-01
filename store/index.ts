import { MutationTree, ActionTree } from 'vuex';

export const state = () => ({
  menu: [] as string[],
  isSidebarVisible: false,
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  SET_MENU: (state, newMenu: string[]) => (state.menu = newMenu),
  TOGGLE_SIDEBAR: (state) => (state.isSidebarVisible = !state.isSidebarVisible),
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, { $content }) {
    const menu = await $content({ deep: true })
      .where({ path: { $ne: '/index' } })
      .only(['title', 'slug', 'path'])
      .fetch();
    commit('SET_MENU', menu);
  },

  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
};
