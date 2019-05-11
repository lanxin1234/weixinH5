<template>
<div class='login' ref='login'>
  <h2>这个登录页面</h2>
</div>
</template>
<script>
import material from './../../../static/material.json'
export default {
  name: 'login',
  data: () => ({

  }),
  created() {

  },
  mounted() {
    this.$refs.login.style.background = material
    console.log('login', this.$refs.login)
  }
}
</script>
<style lang="scss" scoped>
@import './login.scss';
</style>
