<template>
  <div class="container">
    <img class="logo" src="../../../static/img/logo.png" alt="">
    <div class="login-btn" @click="login">点击登录</div>
  </div>
</template>

<script>
import BaseService from '../../services/baseService'

const baseService = new BaseService()

export default {
  methods: {
    async login() {
      let { code } = await baseService.wxLogin()
      let { token } = await baseService.getToken(code)
      wx.setStorageSync('token', token)
      wx.navigateBack()
    }
  }
}
</script>

<style lang="stylus" scoped>
page
  background-color #fff
  .logo
    margin-top 50px
    width 50px
    height 50px
    border-radius 10px
  .login-btn
    margin-top 100px
    width 200px
    height 30px
    color #fff
    text-align center
    line-height 30px
    border-radius 5px
    font-size 13px
    background linear-gradient(90deg, #FFD200 0%, #FF9B44 100%)
</style>
