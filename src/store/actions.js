import {fetchList, fetchUserInfo, fetchitem} from '../api/index.js';

export default {
    async FETCH_NEWS(context) {
        var news = "news";
        context.commit('SET_NEWS',await fetchList(news));
    },
    async FETCH_JOBS({commit}) {
        var jobs = "jobs";
        commit('SET_JOBS',await fetchList(jobs));
    },
    async FETCH_ASK({commit}) {
        var asks = "ask"
        commit('SET_ASKS',await fetchList(asks));
    },
    async FETCH_USER (context, username) {

        context.commit('SET_USER',  await fetchUserInfo(username))
    },
    async FETCH_ITEM(context, id) {

        context.commit('SET_ITEM', await fetchitem(id))
    }
}