import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/scss/main.scss";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Tema de Prism (puedes elegir otro)
import router from "./router";

import { plugin, defaultConfig } from "@formkit/vue";
import config from "./formkit.config";
import App from "./App.vue";
import i18n from "./i18n";

const app = createApp(App);
const pinia = createPinia();

// Global available
app.config.globalProperties.$prism = Prism;

app.use(router);
app.use(i18n);
app.use(plugin, defaultConfig(config));
app.use(pinia);
app.mount("#app");
