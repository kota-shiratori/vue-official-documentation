import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { ref } from 'vue'

export default {
    // `setup` は、Composition API 専用の特別なフックです。
    setup() {
      const count = ref(0);
  
      // ref をテンプレートに公開します
      return {
        count,
      };
    },
  };

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
