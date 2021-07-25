<template>
  <div>
    <!-- 컴포넌트 사용할때 이렇게 쓴다. -->
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'


export default {
  //컴포넌트는 객체(오브젝트)형식으로 한다.
  //근데 머지..? 그냥 되네? 이건 그냥 하나의 오브젝트(객체)로 보나..?
  components : {
    ListItem,
  }
  
}
</script>

