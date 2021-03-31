<template>
  <div>
    <div class="top-part"></div>
    <div class="integral-card">
      <img class="bg" src="../../../../static/img/card-bg.png" alt="">
      <p class="integral">2000</p>
      <p class="desc">积分</p>
      <p class="cart_desc">积分卡</p>
      <p class="cart_desc_en">Integral card</p>
    </div>
    <ul class="integral-history">
      <li class="integral-detail">
        <p class="title">消费获得积分</p>
        <p class="time">2018-01-01 12:20</p>
        <p class="desc">订单号：12898937673687</p>
        <p class="num add">+1</p>
      </li>
      <li class="integral-detail">
        <p class="title">积分抵扣</p>
        <p class="time">2018-01-01 12:20</p>
        <p class="desc">订单号：12898937673687</p>
        <p class="num reduce">-3</p>
      </li>
      <li class="integral-detail">
        <p class="title">邀请好友</p>
        <p class="time">2018-01-01 12:20</p>
        <p class="desc">成功邀请好友并消费成功</p>
        <p class="num add">+5</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .top-part
    height 150px
    background-color #ffd200
  .integral-card
    position relative
    margin 0 15px
    margin-top -130px
    width 345px
    height 200px
    .bg
      position absolute
      left 0
      top 0
      width 345px
      height 200px
      border-radius 10px
      box-shadow 0px 3px 10px #333333
    .integral
      position absolute
      right 20px
      top 10px
      font-size 60px
      font-weight bold
      color #fbdfb7
    .desc
      position absolute
      right 25px
      top 85px
      font-size 15px
      color #fbdfb7
    .cart_desc
      position absolute
      left 25px
      bottom 50px
      font-size 16px
      font-weight bold
      color #fbdfb7
    .cart_desc_en
      position absolute
      left 25px
      bottom 25px
      font-size 15px
      color #fbdfb7
  .integral-history
    margin 15px
    .integral-detail
      position relative
      height 90px
      border-bottom 1px solid #f4f5f9
      .title
        position absolute
        top 15px
        left 0
        font-size 18px
        font-weight 500
      .time
        position absolute
        top 16px
        right 0
        font-size 14px
        color #999999
      .desc
        position absolute
        left 0
        bottom 15px
        font-size 16px
        color #999999
      .num
        position absolute
        right 0
        bottom 15px
        font-size 18px
        font-weight 500
        &.add
          color #39cba0
        &.reduce
          color red
</style>
