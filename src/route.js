export default [
  {
    path: '/',
    name: 'Login',
    component: () =>
      import('./components/login/index.vue'),
  },
  {
    path: '/home',
    name: 'System',
    component: () =>
      import('./components/layout/index.vue'),
      children:[
        // 设置路由地址与组件对应关系
        {path:'/home',component:() =>
        import('./components/home/index.vue')},
        {
          path: '/member',
          name: 'Member',
          component: () =>
            import('./components/member/index.vue'),
        },
        {
          path: '/stock',
          name: 'Stock',
          component: () =>
            import('./components/stock/index.vue'),
        },
      ]
  },
]