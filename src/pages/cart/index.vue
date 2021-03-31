<template>
  <div>
    <ul class="cart-list-wrapper">
      <li class="cart-list">
        <div class="check-box">
          <checkbox />
        </div>
        <img class="food-pic" src="../../../static/img/food-list/food_18.png" alt="">
        <div class="food-info" @click="linkToDetail">
          <h3 class="food-name">肉夹馍</h3>
          <p class="food-price">￥5.0</p>
        </div>
        <div class="cartcontrol-wrapper">
          <cart-control/>
        </div>
      </li>
      <div class="notice">
        <span>满20减10，</span>
        <span>还差6元，</span>
        <span style="color: red;">立即凑单!</span>
      </div>
    </ul>
    <div class="btn-submit-wrapper">
      <div class="select-all-wrapper">
        <checkbox class="select-all" />
        <span class="all-label">全选</span>
      </div>
      <div class="all-amount">
        合计：<span style="color: red;">￥6.5</span>
      </div>
      <div class="btn-submit" @click="submit">去结算</div>
    </div>
  </div>
</template>

<script>
import CartControl from '@/components/cart-control'

export default {
  methods: {
    linkToDetail() {
      wx.navigateTo({ url: '../index/food-detail/main' });
    },
    submit() {
      wx.navigateTo({ url: './payment/main' });
    }
  },
  components: {
    CartControl
  }
}
</script>

<style lang="stylus" scoped>
  .cart-list-wrapper
    padding-bottom 50px
    .cart-list
      margin 1px 0
      position relative
      width 100%
      height 100px
      background-color #ffffff
      .check-box
        position absolute
        top 0
        left 15px
        width 20px
        height 98px
        line-height 98px
      .food-pic
        position absolute
        left 50px
        top 9px
        width 80px
        height 80px
      .food-info
        position absolute
        top 8px
        left 155px
        width 200px
        height 90px
        .food-name
          margin-bottom 40px
          font-size 16px
          font-weight bold
        .food-price
          font-size 15px
          font-weight bold
          color #fb1c35
      .cartcontrol-wrapper
        position absolute
        right 15px
        bottom 10px
    .notice
      padding-left 50px
      width 100%
      height 35px
      line-height 35px
      font-size 13px
      font-weight 500
      background-color #fbf9e0
  .btn-submit-wrapper
    display flex
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    line-height 50px
    background-color #ffffff
    font-size 15px
    .select-all-wrapper
      position relative
      flex 0 0 75px
      .select-all
        position absolute
        top -1px
        left 15px
      .all-label
        display block
        position absolute
        top 0
        right 0
        height 50px
        line-height 50px
    .all-amount
      flex 1
      padding-left 90px
      font-weight 500
    .btn-submit
      flex 0 0 100px
      height 100%
      text-align center
      background-color #ffd200
      font-weight 500
</style>
<style lang="stylus">
  page
    background-color #f4f5f9
</style>

