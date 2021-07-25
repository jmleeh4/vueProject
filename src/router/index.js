import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'



const routes = [
  {
    //path : url 주소;
    path: '/',
    //리다이렉트 
    //redirect: '/news',
    name: 'Home',
    //component : url 주소로 갔을 때 표시될 컴포넌트
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path : '/news',
    name : 'news',
    component : NewsView
  },
  {
    path : '/ask',
    name : 'ask',
    component : AskView
  },
  {
    path : '/jobs',
    name : 'jobs',
    component : JobsView
  },
  // webpackChunkName : laze-loading 이라고 vue.js 는 맨 처음 시작할때 한번에 리소스를 다운받는데 프로젝트가
  // 커지다 보면 코드가 커져서 첟음 진이속도가 느려진다. 그래서 리소스를 컴포넌트 단위로 분리하여 다운받아
  // 코드 스트레스를 줄이는 방법이 있는데 이것을 laze-loading이라고 한다. webpackChunkName는 리소스를 분리시키는
  //  laze-loading의 방법이다. 그리고 주석을 달아야 먹힌다.. 신기하다..
  {
    path : '/user/:id',
    component : () => import(/* webpackChunkName: "UserView" */ '../views/UserView.vue')
  },
  {
    path : '/item/:id',
    component : () => import(/* webpackChunkName: "itemView" */ '../views/itemView.vue')
  },
 

]

const router = createRouter({
  // path 에서 '#' 라는 해쉬값을 지우는거라고 하는데 잘 모르겠음.. 보면 BASE_URL 라는게 있는거 보니까 경로 제대로 나오게 하는것 같긴 함
  // - 추가 : process.env.BASE_URL => 설정에서 지정한 경로를 찾는것이다. 보통 '/'로 설정되어있다. 그래서 '#'이 지워지는 것이다.
  //         보통 vue.config.js 에서 경로를 임의로 변경할 수 있으며 publicPath를 의미한다. 
  history: createWebHistory(process.env.BASE_URL),
  // routes 에 경로설정을 하고 이 routes 를 router에 담아서 라우터설정을 한다.
  routes
})

//main.js 에 router 를 넘기기 위해 export 를 한다.
export default router
