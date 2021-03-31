<template>
  <div>
    <div class="header">
      <div class="avatar">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <open-data class="name" type="userNickName"></open-data>
      <p class="my-integral">
        我的积分：<span class="integral-num">500</span>
      </p>
    </div>
    <div class="list-wrapper">
      <div class="list" @click="linkTo(0)">
        <div class="list-icon">
          <img src="../../../static/img/list.png" alt="">
        </div>
        <p class="list-title">我的订单</p>
        <div class="arrow-icon">
          <img src="../../../static/img/arrow.png" alt="">
        </div>
      </div>
      <div class="list" @click="linkTo(1)">
        <div class="list-icon">
          <img src="../../../static/img/address.png" alt="">
        </div>
        <p class="list-title">地址管理</p>
        <div class="arrow-icon">
          <img src="../../../static/img/arrow.png" alt="">
        </div>
      </div>
      <div class="list" @click="linkTo(2)">
        <div class="list-icon">
          <img src="../../../static/img/integral.png" alt="">
        </div>
        <p class="list-title">我的积分</p>
        <div class="arrow-icon">
          <img src="../../../static/img/arrow.png" alt="">
        </div>
      </div>
      <div class="list">
        <div class="list-icon">
          <img src="../../../static/img/prize.png" alt="">
        </div>
        <p class="list-title">邀请有奖</p>
        <div class="arrow-icon">
          <img src="../../../static/img/arrow.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    linkTo(index) {
      let urlList = ['./order-history/main', './my-address/main', './integral/main']
      wx.navigateTo({ url: urlList[index] });
    }
  }
}
</script>

<style lang="stylus" scoped>
  $color-primary = #ffd200
  .header
    position relative
    height 110px
    width 100%
    background-color $color-primary
    .avatar
      position absolute
      left 20px
      top 10px
      width 80px
      height 80px
      border-radius 50%
      box-shadow 0px 0.5px 8px #c2c2c2
      overflow hidden
    .name
      position absolute
      left 130px
      top 20px
      font-size 20px
      font-weight bold
    .my-integral
      position absolute
      left 130px
      top 60px
      font-size 14px
      font-weight 500
      .integral-num
        color red
  .list-wrapper
    width 100%
    padding-left 20px
    background-color #ffffff
    .list
      display flex
      width 100%
      height 50px
      line-height 50px
      border-bottom 0.5px solid #f4f5f9
      &:last-child
        border-bottom 0
      .list-icon
        flex 0 0 30px
        height 50px
        img
          margin-top 15px
          width 20px
          height 20px
      .list-title
        flex 1
        height 50px
        font-size 15px
      .arrow-icon
        padding-right 15px
        flex 0 0 50px
        height 50px
        text-align right
        img
          width 15px
          height 15px
</style>
<style lang="stylus">
  page
    background-color #f4f5f9
</style>
