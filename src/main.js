import { createApp } from "vue";
import App from "./App.vue";
import { createBootstrap } from "bootstrap-vue-next";

import "bootstrap/dist/css/bootstrap.css";
// import bootstrap from "bootstrap/dist/js/bootstrap.js";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);
app.use(createBootstrap());

library.add(faPlay);
library.add(faPause);
library.add(faBackwardStep);
library.add(faForwardStep);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
