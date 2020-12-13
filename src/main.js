import Vue from 'vue'
import App from './App.vue'

import Router from "./routes.js";

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import './assets/css/tailwind.css';

Vue.config.productionTip = false

new Vue({
	//router,
	render: (h) => h(App),
	router: Router
}).$mount("#app");
