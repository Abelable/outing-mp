<template>
  <div>
    <div class="tab-bar-wrapper">
      <div class="tab-bar-main">
        <div class="tab-bar" @click="seleted(0)">全部</div>
        <div class="tab-bar" @click="seleted(1)">待接单</div>
        <div class="tab-bar" @click="seleted(2)">已完成</div>
      </div>
      <div class="border-bottom" :style="{left: border_left}"></div>
    </div>
    <ul class="order-lists">
      <li class="order-list">
        <div class="top-part">
          <span class="order-num">订单号：1202192898838</span>
          <span class="status">已完成</span>
        </div>
        <div class="main-part" @click="linkTo">
          <img class="food-pic" src="../../../../static/img/food-list/food_2.png" alt="">
          <img class="food-pic" src="../../../../static/img/food-list/food_2.png" alt="">
          <img class="food-pic" src="../../../../static/img/food-list/food_2.png" alt="">
          <span class="pic-num">共3件</span>
          <div class="arrow-icon">
            <img src="../../../../static/img/arrow.png" alt="">
          </div>
        </div>
        <div class="bottom-part">
          <div class="price-desc">
            实付金额：<span class="price">￥13.0</span>
          </div>
          <div class="contact-btn-wrapper">
            <div class="contact-btn">联系商家</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0
    }
  },
  computed: {
    border_left() {
      let leftVal = this.selectedIndex * 33.3
      return `${leftVal}%`
    }
  },
  methods: {
    seleted(index) {
      this.selectedIndex = index
    },
    linkTo() {
      wx.navigateTo({ url: './order-detail/main' });
    }
  }
}
</script>

<style lang="stylus" scoped>
  $color-primary = #ffd200
  .tab-bar-wrapper
    position fixed
    left 0
    top 0
    width 100%
    height 50px
    .tab-bar-main
      position absolute
      left 0
      top 0
      display flex
      width 100%
      height 50px
      line-height 50px
      background-color #ffffff
      .tab-bar
        flex 1
        height 50px
        text-align center
        font-size 16px
        font-weight 500
    .border-bottom
      position absolute
      bottom 0
      width 33.3%
      height 3px
      background-color $color-primary
      transition .3s ease-out
  .order-lists
    padding-top 60px
    .order-list
      .top-part
        margin-bottom 0.5px
        display flex
        height 50px
        line-height 50px
        background-color #ffffff
        font-size 16px
        .order-num
          padding-left 15px
          flex 0 0 280px
        .status
          padding-right 15px
          flex 1
          text-align right 
          color #999999
      .main-part
        margin-bottom 0.5px
        padding 0 15px
        display flex
        height 100px
        line-height 100px
        background-color #ffffff
        .food-pic
          margin-top 10px
          margin-right 5px
          flex 0 0 80px
          height 80px
        .pic-num
          flex 0 0 60px
          text-align center
          font-size 13px
          color #666666
        .arrow-icon
          flex 1
          text-align right
          img
            width 15px
            height 15px
      .bottom-part
        display flex
        padding 0 15px
        height 50px
        line-height 50px
        background-color #ffffff
        .price-desc
          flex 1
          font-size 13px
          color #999999
          .price
            color red
            font-size 18px
        .contact-btn-wrapper
          flex 0 0 80px
          .contact-btn
            margin-top 10px
            width 80px
            height 30px
            line-height 30px
            font-size 13px
            font-weight 500
            text-align center
            border 0.5px solid #999999
            border-radius 15px
</style>
<style lang="stylus">
  page
    background-color #f4f5f9
</style>
