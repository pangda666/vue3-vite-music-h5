<script setup>
import { ref } from 'vue';
// import { storeToRefs } from 'pinia';
import useThemeStore from 'store/theme';
import { changeGlobalStyle } from 'utils';
import HelloWorld from './components/HelloWorld.vue';

const active = ref(0);
const { themeVars } = useThemeStore();

changeGlobalStyle(themeVars);

// const themeVars = reactive({
//   // primaryColor: '#008c8c',
//   // buttonPrimaryBackground: 'yellow',
// });
</script>

<template>
  <!-- <van-config-provider  :theme-vars="themeVars">
    <van-button plain type="primary">朴素按钮</van-button>
  </van-config-provider> -->
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
#app {
  --van-primary-color: #008c8c;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
