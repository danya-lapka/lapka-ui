import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/all.scss';
import '@/styles/mixins.scss';
import { BaseButton, BaseLink, BaseTooltip } from './components';

const app = createApp(App);
app.component("BaseButton", BaseButton);
app.component("BaseLink", BaseLink);
app.component("BaseTooltip", BaseTooltip);
app.mount('#app');
