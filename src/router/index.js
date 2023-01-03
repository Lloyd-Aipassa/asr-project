import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import asr from "../views/asr.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/asr",
		name: "asr",
		component: asr,
	},
	
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
