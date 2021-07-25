<template>

<div>
  <list-item></list-item>
</div>
  <!-- <ul class="news-list">
      <li :key="i" v-for="(item,i) in fetchedAsks" class="post">
        포인트영역 
        <div class="points">
          {{item.points}}
        </div>
        기타 정보 영역
          <div>
            <p class="news-title">
              <router-link :to="'/item/' + item.id">{{item.title}}</router-link>
            </p>
            <small class="link-text">
              {{item.time_ago}} by 
              <router-link :to="'/user/' + item.user" class="link-text">{{item.user}}</router-link>
            </small>
          </div>
      </li> 
    </ul> -->
</template>

<script>
// import {mapGetters} from 'vuex';
import ListItem from '../components/ListItem.vue'

export default {

components : {
  ListItem
}

  // computed: {
  //   ...mapGetters({
  //     fetchedAsks : 'fetchedAsks'
  //   })
  // },

  // async created() {  
  //   this.$store.dispatch('FETCH_ASK');
  // }

}
</script>

