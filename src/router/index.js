import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Chatroom from '../views/Chatroom'
import { auth } from '../firebase/config'

const routes = [
	{
		path: '/',
		name: 'welcome',
		component: Welcome,
		beforeEnter(to, from, next) {
			!auth.currentUser ? next() : next({name: 'chatroom'});
		}
	},
	{
		path: '/chatroom',
		name: 'chatroom',
		component: Chatroom,
		beforeEnter(to, from, next) {
			auth.currentUser ? next() : next({name: 'welcome'});
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
