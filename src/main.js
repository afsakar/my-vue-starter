import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';

import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          

const app = createApp(App);
app.use(PrimeVue);
app.component('Button', Button);

app.mount('#app');
