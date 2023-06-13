import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'amfe-flexible';
import store from './store';

// Vscode爆红，Delete `␍`eslint(prettier/prettier)错误的解决方法：https://blog.csdn.net/weixin_59250190/article/details/129251895

createApp(App).use(store).mount('#app');
