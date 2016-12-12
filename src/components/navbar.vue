<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/person">个人页</router-link>

    <router-link to="/login" v-if="!user">登录</router-link>
    <router-link to="/reg" v-if="!user">注册</router-link>
    <a href="javascript:void(0)" v-else @click="logout" >退出</a>
  </div>
</template>
<script>
  import { mapGetters ,mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        UserInfo:"UserInfo"
      }),
      ...mapActions({
        UserLogout:"UserLogout"
      }),
      user(){
        return this.UserInfo
      }
    },
    methods:{
      logout(){
        this.$store.dispatch('UserLogout');
      }
    }
  }
</script>
