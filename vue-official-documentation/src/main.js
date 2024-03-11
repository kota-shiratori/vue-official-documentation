import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// createApp 関数で新しい アプリケーションのインスタンス を作成することから始まります:
// アプリケーションのインスタンスは .mount() メソッドが呼ばれるまで何もレンダリングしません。
createApp(App).mount("#app");

// ↓複数のアプリケーションのインスタンス
// const app1 = createApp({
//   /* ... */
// });
// app1.mount("#container-1");

// const app2 = createApp({
//   /* ... */
// });
// app2.mount("#container-2");
