import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import VueKinesis from 'vue-kinesis'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '/src/assets/main.css';

var VueScrollTo = require('vue-scrollto');

createApp(App)
    .use(store)
    .use(router)
    .use(VueKinesis)
    .use(VueScrollTo)
    .use(vuetify)
.mount('#app')
