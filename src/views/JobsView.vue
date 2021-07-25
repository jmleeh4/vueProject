<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li :key="i" v-for="(item,i) in fetchedJobs" class="post">
        포인트영역
        <div class="points">
          {{item.points || 0}}
        </div>
        기타 정보 영역
          <div>
            <p class="news-title">
              <a :href="item.url">
              {{item.title}}
              </a>
            </p>
            <small class="link-text">
               {{item.time_ago}} by 
                <a :href="item.url">{{item.domain}}</a>
            </small>
          </div>
      </li> 
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components : {
    ListItem
  }
}
</script>

