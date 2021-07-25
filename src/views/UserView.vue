<template>
    <div>
        <p>name : {{this.fetchedUser.id}}</p>
        <p>karma : {{this.fetchedUser.karma}}</p>
        <p>create : {{this.fetchedUser.created}}</p>
        </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    
    computed: {
        ...mapGetters({
            fetchedUser : 'fetchedUser'
        })
    },
    created() {
        const userName = this.$router.currentRoute._value.params.id;

        this.$store.dispatch('FETCH_USER',userName);
    }, 
    methods: {}
}
</script>