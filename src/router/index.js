import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login.vue'
import gallery2 from '@/pages/gallery2.vue'
import gallery3 from '@/pages/gallery3.vue'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'login',
		component: login
	},
	{
		path: '/second',
		name: 'gallery2',
		component: gallery2
	},
	{
		path: '/last',
		name: 'gallery3',
		component: gallery3
	},
	]
})
