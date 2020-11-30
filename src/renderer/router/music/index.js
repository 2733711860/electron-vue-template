export default [
	{
	  path: '/',
	  redirect: '/descover'
	},
  {
		path: '/descover',
		name: 'descover',
		component: resolve => {
			require(['@/views/descover/index.vue'], resolve)
		},
		meta: {
			title: '发现'
		}
  }
]
