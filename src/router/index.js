import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{
	path: "/",
		alias: "/contactbook",
		name: "ContactBook",
		component: () => import("../views/ContactBook"),
	},
	{
		path: "/contacts",
		name: "EditContact",
		component: () => import("../views/ContactEdit"),
	},
	{
		path: "/add",
		name: "AddContact",
		component: () => import("../components/ContactAdd"),
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;