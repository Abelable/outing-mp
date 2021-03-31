<template>
  <div>
    <div class="top-part"></div>
    <div class="order-detai-wrapper">
      <div class="food-info-wrapper">
        <div class="title">商品信息</div>
        <ul class="order-lists">
          <li class="order-list">
            <img class="food-pic" src="../../../../../static/img/food-list/food_3.png" alt="">
            <div class="food-info">
              <h3 class="food-name">肉夹馍</h3>
              <p class="food-price">￥5.0</p>
            </div>
            <p class="order-num">x1</p>
          </li>
          <li class="order-list">
            <img class="food-pic" src="../../../../../static/img/food-list/food_3.png" alt="">
            <div class="food-info">
              <h3 class="food-name">肉夹馍</h3>
              <p class="food-price">￥5.0</p>
            </div>
            <p class="order-num">x1</p>
          </li>
        </ul>
        <div class="price-detail-wrapper">
          <p class="price-detail">
            <span class="price-tip">商品总价：</span>
            <span class="price-num">￥18.5</span>
          </p>
          <p class="price-detail">
            <span class="price-tip">店铺优惠：</span>
            <span class="price-num">-￥3.0</span>
          </p>
          <p class="price-detail">
            <span class="price-tip">积分抵扣：</span>
            <span class="price-num">-￥3.0</span>
          </p>
          <p class="price-detail">
            <span class="price-tip">餐盒费：</span>
            <span class="price-num">+￥1.0</span>
          </p>
          <p class="price-detail">
            <span class="price-tip">配送费：</span>
            <span class="price-num">+￥3.0</span>
          </p>
        </div>
        <div class="total-price">
          <span class="price-tip">合计实付</span>
          <span class="price-num">￥20.0</span>
        </div>
      </div>
      <div class="delivery-info-wrapper">
        <div class="title">配送信息</div>
        <div class="receiver-info">
          <p class="info-list">
            <span class="tip">收货人姓名：</span>
            <span class="content">张三（15869035014）</span>
          </p>
          <p class="info-list">
            <span class="tip">收货人地址：</span>
            <span class="content">浙江省杭州市余杭区闲林街道竹海水韵流霞苑</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  $color-primary = #ffd200
  .top-part
    height 80px
    background-color $color-primary
  .order-detai-wrapper
    margin -70px 15px
    padding-bottom 10px
    .food-info-wrapper
      margin-top -70px
      padding 0 15px
      background-color #ffffff
      border-radius 3px
      .title
        width 100%
        height 50px
        line-height 50px
        font-size 16px
        font-weight 500
        border-bottom 0.5px solid #f4f5f9
      .order-lists
        background-color #ffffff
        border-bottom 0.5px solid #f4f5f9
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
            right 5px
            bottom 15px
            font-size 14px
            color #333333
            font-weight 500
      .price-detail-wrapper
        padding 10px 0
        border-bottom 0.5px solid #f4f5f9
        .price-detail
          display flex
          height 25px
          line-height 25px
          font-size 15px
          font-weight 500
          .price-tip
            flex 1
            color #999999
          .price-num
            flex 1
            text-align right
            color red
      .total-price
        display flex
        height 50px
        line-height 50px
        font-size 16px
        font-weight 500
        .price-tip
          flex 1
          color #999999
        .price-num
          flex 1
          text-align right
    .delivery-info-wrapper
      margin 10px 0
      padding 0 15px
      width 100%
      background-color #ffffff
      border-radius 3px
      .title
        width 100%
        height 50px
        line-height 50px
        font-size 16px
        font-weight 500
        border-bottom 0.5px solid #f4f5f9
      .receiver-info
        padding 10px 0
        .info-list
          margin-bottom 5px
          display flex
          font-size 15px
          font-weight 500
          .tip
            flex 0 0 100px
            color #999999
          .content
            flex 1
</style>
<style lang="stylus">
  page
    background-color #f4f5f9
</style>

