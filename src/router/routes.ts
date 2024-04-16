const routes = [
    //首页
    {
        path:'/home',
        component: () => import('@/views/Home/index.vue'),
        meta:{
            title:'首页'
        }
    },
    //路由重定向
    {
        path:'/',
        redirect:'/home'
    },
    //layout布局
    {
        path:'/personal',
        component:() => import('@/views/Layout/index.vue'),
        children:[
            // 个人博客首页
            {
                path:'/personal',
                component: () => import('@/views/Personal/index.vue'),
                meta:{
                    title:'个人博客'
                }
            },
            // 总文章
            {
                path:'/articles',
                component: () => import('@/views/Articles/index.vue'),
                meta:{
                    title:'文章'
                },
                children:[
                    {
                        path:'/archive',
                        component: () => import('@/views/Articles/components/archive.vue'),
                        meta:{
                            title:'归档'
                        }
                    },
                    {
                        path:'/classify',
                        component: () => import('@/views/Articles/components/classify.vue'),
                        meta:{
                            title:'分类'
                        }
                    },
                    {
                        path:'/label',
                        component: () => import('@/views/Articles/components/label.vue'),
                        meta:{
                            title:'标签'
                        }
                    }
                ]
            },
            // 单个文章
            {
                path:'/article/:id?',
                component: () => import('@/views/Articles/components/article.vue'),
                meta:{
                    title:'文章中心'
                }
            },
            // 标签中心
            {
                path:'/labelList/:label?',
                component: () => import('@/views/Articles/components/labelList.vue'),
                meta:{
                    title:'标签中心'
                }
            },
            // 休闲
            {
                path:'/relax',
                component: () => import('@/views/Relax/index.vue'),
                meta:{
                    title:'休闲'
                }
            },
            // 说说
            {
                path:'/talk',
                component: () => import('@/views/Relax/components/talk.vue'),
                meta:{
                    title:'说说'
                }
            },
            // 相册
            {
                path:'/album',
                component: () => import('@/views/Relax/components/album.vue'),
                meta:{
                    title:'相册'
                }
            },
            // 相册集
            {
                path:'/album/:id',
                component: () => import('@/views/Relax/components/albumPhoto.vue'),
            },
            // 留言
            {
                path:'/leaveword',
                component: () => import('@/views/Relax/components/leaveword.vue'),
                meta:{
                    title:'留言'
                }
            },
            // 留言板
            {
                path:'/feedback',
                component: () => import('@/views/Relax/components/feedback.vue'),
                meta:{
                    title:'留言板'
                }
            },
            // 关于
            {
                path:'/about',
                component: () => import('@/views/About/index.vue'),
                meta:{
                    title:'关于'
                }
            },
            //用户中心
            {
                path:'/user',
                component : () => import('@/views/User/index.vue'),
                meta:{
                    title:'用户中心'
                }
            }
        ]
    },
    //测试页面
    {
        path:'/test',
        component: () => import('@/views/TestCom/test.vue'),
        meta:{
            title:'测试页面'
        }
    },
    //上传页面
    {
        path:'/load',
        component: () => import('@/views/TestCom/load.vue'),
        meta:{
            title:'上传页面'
        }
    },
    //原生上传页面
    {
        path:'/loadnative',
        component: () => import('@/views/TestCom/loadNative.vue'),
        meta:{
            title:'原生上传页面'
        }
    },
    // //简历跳转页面
    // {
    //     path:'/resume',
    //     component: () => import('@/views/Home/resume.vue'),
    //     meta:{
    //         title:'简历'
    //     }
    // },
    // 错误页面
    {
        path:'/404',
        component: () => import('@/views/404/index.vue'),
        meta:{
            title:'页面错误'
        }
    },
    // 错误路由处理
    { 
        path: "/:catchAll(.*)", 
        redirect: "/404" 
    },
]

export default routes