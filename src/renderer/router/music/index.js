export default [
	{
	  path: '/',
	  redirect: '/index'
	},
  {
		path: '/index',
		name: 'index',
		component: resolve => {
			require(['@/views/index.vue'], resolve)
		},
		meta: {
			title: '首页'
		}
  }
]
