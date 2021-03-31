<template>
  <div class="container" @click="hide">
    <div class="login-modal" @click.stop="">
      <div class="avatar">
        <open-data type="userAvatarUrl" />
      </div>
      <div class="nick-name">
        <open-data type="userNickName" />
      </div>
      <div class="login-btn" @click="login">微信一键登录</div>
      <div class="quit-btn" @click="hide">暂不登录</div>
      <div class="protocol-tips">登录即同意《用户协议》</div>
    </div>
  </div>
</template>

<script>
import BaseService from '../services/baseService'
const baseService = new BaseService()

export default {
  data() {
    return {
      
    }
  },
  methods: {
    async login() {
      const { code } = await baseService.wxLogin()
      const { token } = await baseService.getToken(code)
      wx.setStorageSync('token', token)
      wx.navigateBack()
    },

    hide() {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background rgba(0, 0, 0, 0.3)
  .login-modal
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 268px
    height 268px
    background #fff
    border-radius 18rpx
    .avatar
      position absolute
      top -40px
      left 50%
      transform translateX(-50%)
      width 80px
      height 80px
      border-radius 50%
      overflow hidden
      border 6px solid #fff
      background #fff
    .nick-name
      margin-top 50px
      height 30px
      color #333
      font-size 20px
      font-weight 600
      text-align center
    .login-btn
      margin 30px auto 20px
      width 200px
      height 50px
      color #fff
      text-align center
      line-height 50px
      border-radius 25px
      font-size 16px
      font-weight 600
      background linear-gradient(90deg, #FFD200 0%, #FF9B44 100%)
    .quit-btn
      color #666
      font-size 16px
      text-align center
    .protocol-tips
      position relative
      margin 20px auto
      width fit-content
      color #999
      font-size 12px
      &:before, &:after
        position absolute
        top 50%
        transform translateY(-50%)
        width 10px
        height 1px
        content ''
        background #999
      &:before
        left -15px
      &:after
        right -15px
</style>
