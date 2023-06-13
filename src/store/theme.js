import { defineStore } from 'pinia';

const useThemeStore = defineStore('theme', {
  state: () => ({
    themeVars: {
      '--van-primary-color': '#008c8c',
      '--van-tabbar-background': '#008c8c',
    },
  }),
  getters: {},
  actions: {
    updatePrimaryColor(themeVars) {
      this.themeVars = themeVars;
    },
  },
});

export default useThemeStore;
