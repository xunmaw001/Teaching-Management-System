import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chengji from '@/views/modules/chengji/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import kecheng from '@/views/modules/kecheng/list'
    import kechengCollection from '@/views/modules/kechengCollection/list'
    import kechengLiuyan from '@/views/modules/kechengLiuyan/list'
    import news from '@/views/modules/news/list'
    import paike from '@/views/modules/paike/list'
    import qiandao from '@/views/modules/qiandao/list'
    import qingjia from '@/views/modules/qingjia/list'
    import xuejixinxi from '@/views/modules/xuejixinxi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zuoye from '@/views/modules/zuoye/list'
    import config from '@/views/modules/config/list'
    import dictionaryBanji from '@/views/modules/dictionaryBanji/list'
    import dictionaryChengji from '@/views/modules/dictionaryChengji/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryJieke from '@/views/modules/dictionaryJieke/list'
    import dictionaryKecheng from '@/views/modules/dictionaryKecheng/list'
    import dictionaryKechengCollection from '@/views/modules/dictionaryKechengCollection/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionaryQingjia from '@/views/modules/dictionaryQingjia/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXingqi from '@/views/modules/dictionaryXingqi/list'
    import dictionaryXueqi from '@/views/modules/dictionaryXueqi/list'
    import dictionaryZhuang from '@/views/modules/dictionaryZhuang/list'
    import dictionaryZuoye from '@/views/modules/dictionaryZuoye/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBanji',
        name: '班级',
        component: dictionaryBanji
    }
    ,{
        path: '/dictionaryChengji',
        name: '成绩类型',
        component: dictionaryChengji
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJieke',
        name: '第几节',
        component: dictionaryJieke
    }
    ,{
        path: '/dictionaryKecheng',
        name: '课程类型',
        component: dictionaryKecheng
    }
    ,{
        path: '/dictionaryKechengCollection',
        name: '收藏表类型',
        component: dictionaryKechengCollection
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionaryQingjia',
        name: '请假类型',
        component: dictionaryQingjia
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXingqi',
        name: '周次',
        component: dictionaryXingqi
    }
    ,{
        path: '/dictionaryXueqi',
        name: '学期',
        component: dictionaryXueqi
    }
    ,{
        path: '/dictionaryZhuang',
        name: '学籍状态',
        component: dictionaryZhuang
    }
    ,{
        path: '/dictionaryZuoye',
        name: '作业类型',
        component: dictionaryZuoye
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chengji',
        name: '成绩信息',
        component: chengji
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
    ,{
        path: '/kecheng',
        name: '课程',
        component: kecheng
      }
    ,{
        path: '/kechengCollection',
        name: '课程收藏',
        component: kechengCollection
      }
    ,{
        path: '/kechengLiuyan',
        name: '课程留言',
        component: kechengLiuyan
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/paike',
        name: '课程表信息',
        component: paike
      }
    ,{
        path: '/qiandao',
        name: '上课签到',
        component: qiandao
      }
    ,{
        path: '/qingjia',
        name: '学生请假',
        component: qingjia
      }
    ,{
        path: '/xuejixinxi',
        name: '学籍信息',
        component: xuejixinxi
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }
    ,{
        path: '/zuoye',
        name: '作业',
        component: zuoye
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
