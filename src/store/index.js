import {createStore} from 'vuex';
//------------------------------------------
//index.js 에 기능 호출하기 --api
//import {fetchList} from '../api/index.js';
//------------------------------------------

import mutation from '../store/mutation.js'
import action from '../store/actions.js'


const store = createStore({
    //관계도 : state <--> mutations <--> actions
    //-- action 에서 state 로 바로 값을 넘기지 못하고 mutation을 통해서 넘길 수 있다.

    //state : 전역변수같은거로 data와 하는 기능은 동일한듯
    state : {
        news: [],
        jobs: [],
        asks: [],
        user: [],
        item: []
    },
    //computed 랑 같은건데 store 에서는 이 명칭이 된다.
    getters: {
        fetchedNews(state) {
            return state.news;
        },
        fetchedAsks(state) {
            return state.asks;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedUser(state) {
            return state.user;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    //mutation : state 의 값을 유일하게 변경할 수 있는 곳이다
    // action 에서 commit 으로 연결된 데이타를 받아올 수 있다.
    mutations : mutation,

    //actions : 백엔드 api 함수를 호출할 때 사용, 비동기도 모두 여기서 진행할 수 있다.
    //context : mutation 에 접근하기 위한 인자
    actions: action
    //     {
    //     async FETCH_NEWS(context) {
    //         var news = "news";
    //         //mutation에 연결시키기 위한 기능
    //         context.commit('SET_NEWS',await fetchList(news));
    //         //이건안됨..바로 연결이불가능하므로..
    //         //state.news = await fetchList(news);
    
    //     },
    //     //distruction 문법
    //     //context 는 속성으로 commit 을 가지고 있기 때문에 아래와 같은 방법으로
    //     //{속성} 형태로 인자를 바로 받아서 사용이 가능하다...새로운 형태다ㅅㅂㅠㅠ
    //     async FETCH_JOBS({commit}) {
    //         var jobs = "jobs";
    //         //------------------------------------
    //         //api 폴더의 공통함수 가져오는것
    //         // var news = "news";
    //         // this.users = await fetchList(news);
    //         // console.log(this.users)
    //         //------------------------------------
    //         commit('SET_JOBS',await fetchList(jobs));
    //     },
    //     async FETCH_ASK({commit}) {
    //         var asks = "ask"
    //         commit('SET_ASKS',await fetchList(asks));
    //     }
    // }   
})

export default store
