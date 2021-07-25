<template>
  <div id="nav">
    <!-- // 1. Strongly Recommended
    <ToolBar></ToolBar>
    // 2. Eessential -->
    
    <tool-bar></tool-bar>
    
    <transition name="page">
      <router-view></router-view> <!-- 라우터 설정-->
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar
  }
}
</script>


<!--<style scoped> scope 는 해당 컴포넌트에만 적용한다는 뜻이다. </style> -->
<style>


#nav a:hover {
  color: #42b883;
  text-decoration: underline;
}

#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}

.page-enter-active, .page-leave-active {
  transition: opacity .9s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
