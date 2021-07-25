<template>
      <div>
    <ul class="news-list">
      <li :key="i" v-for="(item,i) in listItems" class="post">
        <!--포인트영역 -->
        <div class="points">
        <!-- or연산자 : point가 없으면 0을 반환해라 -->
          {{item.points || 0}}
        </div>
        <!--기타 정보 영역 -->
          <div>
            <p class="news-title">
              <a :href="item.url">
              {{item.title}}
              </a>
            </p>
            <small class="link-text">
               {{item.time_ago}} by 
              <router-link :to="'/user/' + item.user" class="link-text">{{item.user}}</router-link>
            </small>
          </div>
      </li> 
    </ul>
  </div>
</template>

<script>
//import { mapGetters } from 'vuex';

export default {
    //'...' 스프레이트 오퍼레이터(산개연산자) 
    // ==> 객체가 됐건 배열이됬건 풀어서 넣어줌
    
    // ...mapGetters([
    //     'fetchedNews'
    // ])

        //fetchedNews : 'fetchedNews'
        // fetchedNews : 'fetchedNews'  ==> () 안에 {}(오브젝트)로 하는 방식
    // })
    

    //2. mapHelper 를 이용해서 씀 / import 에  mapstate를 추가해야함
    // ...mapState({               
    //   news: state => state.news
    // })
    //1. 그냥 ask 선언해서 씀
    // ask() {
    //   return this.$store.state.news;
    // }
  

  //view 단
  //created : 컴포넌트가 생성되자 마자 실행되는 함수
  //created() => created : function() 에서 : function을 줄여서 쓸수있다(exlint6)
  //created , beforeMount 는 보통 데이터를 요청하는 라이프사이클훅 
  // => mounted 때 하면 화면을 다시 그려줘야하기때문이 적절하지 않음
    created() {
        console.log(this.$router.currentRoute._value.name);
        const name = this.$router.currentRoute._value.name;
        if( name === 'news') {
            this.$store.dispatch('FETCH_NEWS');
        } else if( name === 'ask') {
            this.$store.dispatch('FETCH_ASK');
        } else if ( name === 'jobs') {
            this.$store.dispatch('FETCH_JOBS');
        }
    },
    computed: {
        listItems() { 
            const name = this.$router.currentRoute._value.name;
            if(name === 'news') {
                return this.$store.state.news;
            }else if(name === 'ask') {
                return this.$store.state.asks;
            }else if(name === 'jobs') {
                return this.$store.state.jobs;
            }
        }
    }
}
</script>


<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}


</style>