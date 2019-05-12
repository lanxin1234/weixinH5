<template>
<div id="app" ref='app' :style='{width: appWidth,height: appHeight}'>
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      appWidth: '100%',
      appHeight: '100%',
      devices: {}
    }
  },
  created() {
    this.resizeWidth()
    window.onresize = this.resizeWidth
  },
  mounted() {},
  methods: {
    resizeWidth() {
      this.getDevices()
      var rat
      if (this.devices.isTablet || this.devices.isPc) {
        rat = 1.5
        var clientHeight = document.documentElement.clientHeight
        this.appWidth = parseInt(clientHeight * 100 / rat) / 100 + 'px'
        this.appHeight = clientHeight + 'px'
      }
    },
    getDevices() {
      var ua = navigator.userAgent
      var isWindowsPhone = /(?:Windows Phone)/.test(ua)
      var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
      var isAndroid = /(?:Android)/.test(ua)
      var isFireFox = /(?:Firefox)/.test(ua)
      var isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua))
      var isPhone = /(?:iPhone)/.test(ua) && !isTablet
      var isPc = !isPhone && !isAndroid && !isSymbian
      this.devices = {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
      }
    }
  }
}
</script>
<style src='./style/common.scss' lang="scss"></style>
