import { createApp } from "vue";
import { VueFire } from "vuefire";
import { firebaseApp } from "./firebase";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/app.css";

createApp(App)
  .use(VueFire, {
    firebaseApp,
    // modules: [VueFireAuth()],
  })
  .use(store)
  .use(router)
  .mount("#app");
