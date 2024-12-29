const printLogo = () => {console.log("\n%c %s %c %s %c %s\n","color: #fff; background: #34495e; padding:5px 0;","伊地知网络","background: #fadfa3; padding:5px 0;","NijikaNetWork","color:#fff;background: #90caf9; padding:5px 0;","https://about.x-x.work/");};
printLogo();
// 引入样式文件
import './assets/main.css';

// 引入 Vue 和 App 组件
import { createApp } from 'vue';

import App from './App.vue';

// 引入路由配置
import router from './router.js';

// 创建 Vue 应用实例并使用路由
const app = createApp(App);

// 初始化 mdui
mdui.mutation();

// 挂载应用到 DOM
app.use(router).mount('#app');
