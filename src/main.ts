import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/index.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWarning, faGears } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWarning,faGears );
const vuetify = createVuetify({
    components,
    directives,
}) 

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(vuetify)
    .use(router)
    .mount('#app');