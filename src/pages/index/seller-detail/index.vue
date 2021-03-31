<template>
  <div>
    <div class="list-wrapper">
      <div class="list-title">
        <p class="title-desc">商家实体照片</p>
      </div>
      <scroll-view class="pics-wrapper" scroll-x>
        <!-- <img class="pic" v-for="(item, index) in sellerPics" :key="index" :src="item" alt=""> -->
        <img class="pic" src="../../../../static/img/food-list/food_14.png" alt="">
        <img class="pic" src="../../../../static/img/food-list/food_13.png" alt="">
        <img class="pic" src="../../../../static/img/food-list/food_12.png" alt="">
        <img class="pic" src="../../../../static/img/food-list/food_11.png" alt="">
        <img class="pic" src="../../../../static/img/food-list/food_10.png" alt="">
        <img class="pic" src="../../../../static/img/food-list/food_9.png" alt="">
        <img class="pic" src="../../../../static/img/food-list/food_8.png" alt="">
      </scroll-view>
    </div>
    <div class="seller-info">
      <div class="list">
        <div class="icon">
          <img src="../../../../static/img/address.png" alt="">
        </div>
        <p class="content">千岛湖镇新安大街506号</p>
      </div>
      <div class="list">
        <div class="icon">
          <img src="../../../../static/img/tel.png" alt="">
        </div>
        <p class="content">15869035014</p>
      </div>
    </div>
    <div class="list-wrapper">
      <div class="list-title">
        <p class="title-desc">商家活动</p>
      </div>
      <div class="activity-lists">
        <div class="activity">
          <div class="icon">
            <img src="../../../../static/img/activity-1.png" alt="">
          </div>
          <p class="content">满50减5,满100减15,满200减35</p>
        </div>
        <div class="activity">
          <div class="icon">
            <img src="../../../../static/img/activity-2.png" alt="">
          </div>
          <p class="content">20起送,满35免配送费</p>
        </div>
        <div class="activity">
          <div class="icon">
            <img src="../../../../static/img/activity-3.png" alt="">
          </div>
          <p class="content">1积分可以抵扣0.5元</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sellerPics: [
        "../../../../static/img/food-list/food_14.png",
        "../../../../static/img/food-list/food_13.png",
        "../../../../static/img/food-list/food_12.png",
        "../../../../static/img/food-list/food_11.png",
        "../../../../static/img/food-list/food_10.png",
        "../../../../static/img/food-list/food_9.png",
        "../../../../static/img/food-list/food_8.png"
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  $color-primary = #ffd200
  .list-wrapper
    margin-bottom 10px
    .list-title
      margin-bottom 0.5px
      padding-top 15px
      height 50px
      background-color #ffffff
      .title-desc
        margin-left 15px
        padding-left 5px
        font-size 16px
        border-left 3px solid $color-primary
    .pics-wrapper
      box-sizing border-box
      padding-top 10px
      padding-left 15px
      width 100%
      height 100px
      white-space nowrap
      background-color #ffffff
      .pic
        margin-right 10px
        width 80px
        height 80px
        border-radius 2px
    .activity-lists
      padding 10px 0
      background-color #ffffff
      .activity
        display flex
        height 40px
        .icon
          padding-top 11px
          flex 0 0 40px
          text-align center
          img
            width 18px
            height 18px
        .content
          flex 1
          height 40px
          line-height 40px
          font-size 16px
  .seller-info
    margin-bottom 10px
    .list
      display flex
      margin-bottom 0.5px
      height 50px
      background-color #ffffff
      .icon
        padding-top 15px
        flex 0 0 40px
        height 50px
        text-align center
        img
          width 20px
          height 20px
      .content
        flex 1
        height 50px
        line-height 50px
        font-size 15px
</style>
<style lang="stylus">
  page
    background-color #f4f5f9
</style>

