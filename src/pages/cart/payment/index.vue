<template>
  <div>
    <div class="address">
      <img class="address-icon" src="../../../../static/img/address.png" alt="">
      <div class="address-info">
        <p class="address-detail">荆常大道768号 顺帆科技园6幢A区333室 记讯科技</p>
        <p class="customer-info">王大锤，15869035014</p>
      </div>
      <img class="arrow" src="../../../../static/img/arrow.png" alt="">
      <img class="border-bottom" src="../../../../static/img/border-bottom.png" alt="">
    </div>
    <div class="integral-switch">
      <p class="switch-tip">
        <span class="tip-title">积分抵扣</span>
        <span class="tip-desc">（您有10积分，可抵扣10元）</span>
      </p>
      <div class="i-switch-wrapper">
        <switch class="i-switch" color="#ffd200"/>
      </div>
    </div>
    <div class="order-info">
      <div class="title">订单信息</div>
      <ul class="order-lists">
        <li class="order-list">
          <img class="food-pic" src="../../../../static/img/food-list/food_3.png" alt="">
          <div class="food-info">
            <h3 class="food-name">肉夹馍</h3>
            <p class="food-price">￥5.0</p>
          </div>
          <p class="order-num">x1</p>
        </li>
        <li class="order-list">
          <img class="food-pic" src="../../../../static/img/food-list/food_3.png" alt="">
          <div class="food-info">
            <h3 class="food-name">肉夹馍</h3>
            <p class="food-price">￥5.0</p>
          </div>
          <p class="order-num">x1</p>
        </li>
      </ul>
      <div class="price-desc-wrapper">
        <p class="price-desc">
          <span class="price-label">商品总价：</span>
          <span class="price-detail">￥18.5</span>
        </p>
        <p class="price-desc">
          <span class="price-label">店铺优惠：</span>
          <span class="price-detail">-￥3.0</span>
        </p>
        <p class="price-desc">
          <span class="price-label">积分抵扣：</span>
          <span class="price-detail">-￥3.0</span>
        </p>
      </div>
    </div>
    <div class="extra-ins">
      <div class="i-list extra-fee">
        <span class="list-title">餐盒费</span>
        <span class="list-content">￥1.0</span>
      </div>
      <div class="i-list extra-fee">
        <span class="list-title">配送费</span>
        <span class="list-content">￥3.0</span>
      </div>
      <div class="i-list">
        <span class="list-title">支付方式</span>
        <span class="list-content">微信支付</span>
      </div>
    </div>
    <div class="remark">
      <div class="remark-title">备注：</div>
      <textarea class="i-textarea" />
    </div>
    <div class="btn-payment-wrapper">
      <p class="total-price">
        <span>实付金额：</span>
        <span class="price-num">￥18.5</span>
      </p>
      <div class="btn-payment">去支付</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="stylus" scoped>
  .address
    position relative
    width 100%
    height 100px
    background-color #ffffff
    .address-icon
      position absolute
      top 12px
      left 10px
      width 20px
      height 20px
    .address-info
      position absolute
      left 36px
      top 10px
      width 310px
      height 100%
      .address-detail
        margin-bottom 5px
        font-size 16px
        font-weight bold
      .customer-info
        font-size 14px
        color #333333
    .arrow
      position absolute 
      right 12px
      top 50%
      transform translateY(-50%)
      width 15px
      height 15px
    .border-bottom
      position absolute
      left 0
      bottom 0
      width 100%
      height 5px
  .integral-switch
    display flex
    margin 10px 0
    height 50px
    line-height 50px
    background-color #ffffff
    .switch-tip
      flex 1
      padding-left 20px
      .tip-title
        font-size 15px
        font-weight 500
      .tip-desc
        font-size 12px
        color #999999
    .i-switch-wrapper
      flex 0 0 60px
      .i-switch
        transform scale(0.9)
  .order-info
    margin 10px 0
    .title
      margin-bottom 1px
      padding-left 20px
      height 50px
      font-size 16px
      font-weight 500
      line-height 50px
      background-color #ffffff
    .order-lists
      margin-bottom 1px
      padding-left 20px
      background-color #ffffff
      .order-list
        position relative
        width 100%
        height 100px
        background-color #ffffff
        border-bottom 0.5px solid #f4f5f9
        &:last-child
          border-bottom none
        .food-pic
          position absolute
          left 0px
          top 9px
          width 80px
          height 80px
        .food-info
          position absolute
          top 8px
          left 105px
          width 200px
          height 90px
          .food-name
            margin-bottom 35px
            font-size 16px
            font-weight bold
          .food-price
            font-size 15px
            font-weight bold
            color #fb1c35
        .order-num
          position absolute
          right 25px
          bottom 15px
          font-size 14px
          color #333333
          font-weight 500
    .price-desc-wrapper
      padding 10px 0 5px
      background-color #ffffff
      .price-desc
        margin-bottom 5px
        display flex
        font-size 15px
        font-weight 500
        .price-label
          flex 1
          text-align right
          color #666666
        .price-detail
          flex 0 0 70px
          color red
  .extra-ins
    margin-bottom 10px
    .i-list
      margin-bottom 1px
      padding 0 20px
      display flex
      background-color #ffffff
      height 50px
      line-height 50px
      .list-title
        flex 1
        font-size 15px
        color #333333
        font-weight 500
      .list-content
        flex 0 0 200px
        text-align right
        color #999999
        font-weight 500
        font-size 15px
      &.extra-fee .list-content
        color red
        font-weight 500
  .remark
    padding-bottom 60px
    .remark-title
      margin-bottom 1px
      padding-left 20px
      height 50px
      line-height 50px
      font-size 16px
      font-weight 500
      background-color #ffffff
    .i-textarea
      box-sizing border-box
      padding 0 20px
      width 100%
      background-color #ffffff
  .btn-payment-wrapper
    display flex
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    line-height 50px
    font-size 15px
    font-weight 500
    background-color #ffffff
    box-shadow 0px -1px 2px #F4F5F9
    .total-price
      padding-left 20px
      flex 1
      .price-num
        color red
    .btn-payment
      flex 0 0 100px
      text-align center
      background-color #ffd200
</style>
<style lang="stylus">
  page
    background-color #f4f5f9
</style>

