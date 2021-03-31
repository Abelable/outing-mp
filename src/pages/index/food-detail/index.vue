<template>
  <div>
    <div class="top-part"></div>
    <img class="food-detail-pic" src="../../../../static/img/food-detail.png" alt="">
    <div class="food-detail-info-wrapper">
      <div class="food-detail-info">
        <h3 class="food-name">瘦肉丸</h3>
        <p class="sales-num">销量：200</p>
        <p class="food-price">￥15</p>
      </div>
      <div class="cart-control-wrapper">
        <cart-control :size="1.1"/>
      </div>
    </div>
  </div>
</template>

<script>
import CartControl from '@/components/cart-control'

export default {
  components: {
    CartControl
  }
}
</script>

<style lang="stylus" scoped>
  $color-primary = #ffd200
  .top-part
    height 180px
    background-color $color-primary
  .food-detail-pic
    margin -160px 4% 15px
    width 92%
    height 220px
    border-radius 10px
    box-shadow 0px 2px 10px #c2c2c2
  .food-detail-info-wrapper
    position relative
    margin 0 4%
    width 92%
    height 100px
    .food-detail-info
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      .food-name
        margin-bottom 8px
        font-size 18px
        font-weight bold
      .sales-num
        margin-bottom 15px
        font-size 16px
        color #999999
      .food-price
        font-size 18px  
        font-weight bold
        color #fb1c35
    .cart-control-wrapper
      position absolute
      right 2px
      bottom 5px
</style>
