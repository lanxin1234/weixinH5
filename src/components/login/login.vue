<template>
<div class='login' ref='login'>
  <div class='loginWrapper'>
    <h1>朝画惜拾</h1>
    <div class="">
      <p class='passWrodFail' v-if='passwdFail'>您输入的密码不正确！</p>
      <input type="text" name="" value="" v-model='passwdValue' @keyup.enter="submit" @input='passwdFail = false' class='passWordBox' placeholder='请输入登录密码'>
      <button type="button" name="button" @click='submit'>登录</button>
    </div>
  </div>
</div>
</template>
<script>
import bg from './../../assets/loginBg.jpg'
export default {
  name: 'login',
  data: () => ({
    passwdValue: '',
    passwdFail: false
  }),
  created() {
    this.getCount()
  },
  mounted() {
    this.$refs.login.style.background = 'url(' + bg + ') no-repeat center center'
    this.$refs.login.style.backgroundSize = 'cover'
  },
  methods: {
    submit() {
      if (this.passwdValue !== 'zhxs666') {
        this.passwdFail = true
      } else {
        this.$router.push({
          'name': 'collections'
        })
      }
    },
    getCount() {
      var caution = false

      function setCookie(name, value, expires, path, domain, secure) {
        var curCookie = name + '=' + escape(value) +
          ((expires) ? ';expires=' + expires.toGMTString() : '') +
          ((path) ? '; path=' + path : '') +
          ((domain) ? '; domain=' + domain : '') +
          ((secure) ? ';secure' : '')
        if (!caution || (name + '=' + escape(value)).length <= 4000) {
          document.cookie = curCookie
        } else if (confirm('Cookie exceeds 4KB and will be cut!')) {
          document.cookie = curCookie
        }
      }

      function getCookie(name) {
        var prefix = name + '='
        var cookieStartIndex = document.cookie.indexOf(prefix)
        if (cookieStartIndex === -1) {
          return null
        }
        var cookieEndIndex = document.cookie.indexOf(';', cookieStartIndex + prefix.length)
        if (cookieEndIndex === -1) {
          cookieEndIndex = document.cookie.length
        }
        return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
      }

      function deleteCookie(name, path, domain) {
        if (getCookie(name)) {
          document.cookie = name + '=' +
            ((path) ? '; path=' + path : '') +
            ((domain) ? '; domain=' + domain : '') +
            '; expires=Thu, 01-Jan-70 00:00:01 GMT'
        }
      }

      function fixDate(date) {
        var base = new Date(0)
        var skew = base.getTime()
        if (skew > 0) {
          date.setTime(date.getTime() - skew)
        }
      }
      var now = new Date()
      fixDate(now)
      now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
      var visits = getCookie('counter')
      if (!visits) {
        visits = 1
      } else {
        visits = parseInt(visits) + 1
      }
      setCookie('counter', visits, now)
      console.log('您是到访的第' + visits + '位用户！')
      // 统计页面访问次数，暂时先删除记录
      deleteCookie('counter')
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../../style/common.scss';
@import './login.scss';
</style>
