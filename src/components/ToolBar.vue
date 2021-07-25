<template>
    <div class="header">
        <router-link to="/">Home</router-link> |
        <router-link to="/ask">ask</router-link> |
        <router-link to="/jobs">jobs</router-link> |
        <router-link to="/news">News</router-link>
    </div>
</template>
<script>
export default {
    name:'',
    components: {},
    data() {
        return {
            sampleDate: ''
        };
    },
    beforeCrate() {}, 
    created() {}, 
    beforeMount() {}, 
    mounted() {}, 
    beforeUpdate() {}, 
    updated() {}, 
    beforeUnmount() {}, 
    unmounted() {},
    methods: {}
}
</script>

<style scoped>
.header {
  background-color: #42b84c8f;
  color: white;
  padding: 8px 8px 8px 25px;
  display: flex;
  align-items: center;
}
.header a:visited {
  color: white;
}
.header a:active {
  color: #35495e;
}
.fixed {
  position: fixed;
  width: 100%;
  z-index: 999;
}
.logo {
  width: 30px;
  margin-right: 18px;
}
a {
  margin: 0 5px;
}
</style>