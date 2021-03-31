<template>
  <div>
    <div class="header">
      <div class="bulletin">公告：今天肥牛香锅特价！</div>
      <div class="activity">
        <swiper class="wx-swiper" autoplay="true" vertical="true" interval="8000" circular='true'>
          <swiper-item class="wx-wiper-item" v-for="(item, index) in activity_list" :key="index">
            <div class="item-content" v-for="(_item, _index) in item" :key="_index" >
              <img class="icon" :src="_item.icon" alt="">
              <span>{{_item.text}}</span>
            </div>
          </swiper-item>
        </swiper>
      </div>
      <img @click="linkToSeller" class="avatar" src="../../../static/img/avatar.png" alt="">
    </div>
    <swiper class='bannerSwiper' @change="handleChange" autoplay="true" circular='true' previous-margin="50rpx" next-margin='50rpx'  interval="6000">
      <swiper-item class="bannerItem"  v-for="(item, index) in banner" :key="index">
        <img :class="{active : currentIndex === index ? true : false}" :src="item.bannerPic" alt="">
      </swiper-item>
    </swiper>
    <div class="recommended-prods">
      <div class="title-wrapper">
        <span class="title">推荐商品</span>
        <span class="title-en">Recommended products</span>
      </div>
      <scroll-view class="re-prods-wrapper" scroll-x="true" scroll-with-animation="true">
        <view @click="linkToDetail" class="re-prod-list" v-for="(item, index) in recommonedList" :key="index">
          <div class="foot-info-wrapper" >
            <img class="food-pic" :src="item.foodPic" alt="">
            <h3 class="food-name">{{item.foodName}}</h3>
            <p class="sales-num">销量：{{item.salesNum}}</p>
            <p class="food-price">￥{{item.foodPrice}}</p>
          </div>
          <div class="cart-control-wrapper">
            <cart-control :size="0.8" @login="login" />
          </div>
        </view>
      </scroll-view>
    </div>
    <div class="foods-menu">
      <scroll-view class="menu-nav-list" scroll-y scroll-with-animation>
        <ivew class="nav-item" :class="{selected: selectedIndex === index ? true : false}" @click="selectedIndex = index" v-for="(item, index) in menuNavList" :key="index">{{item}}</ivew>
      </scroll-view>
      <div class="menu-content-wrapper" :class="{selected: selectedIndex === index ? true : false}" v-for="(item, index) in menuList" :key="index">
        <div class="menu-content-title">{{item.title}}</div>
        <scroll-view class="menu-content-list" scroll-y scroll-with-animation>
          <ivew @click="linkToDetail" class="food-item" v-for="(_item, _index) in item.list" :key="_index" >
            <img class="food-pic" :src="_item.foodPic" alt="">
            <div class="food-info-wrapper">
              <h3 class="food-name">{{_item.foodName}}</h3>
              <p class="sales-num">销量：{{_item.salesNum}}</p>
              <p class="food-price">￥{{_item.foodPrice}}</p>
            </div>
            <div class="cart-control-wrapper">
              <cart-control @login="login"/>
            </div>
          </ivew>
        </scroll-view>
      </div>
    </div>
    <login-modal v-if="loginModalVisible" @hide="hideLoginModal"/>
  </div>
</template>

<script>
import CartControl from '@/components/cart-control'
import LoginModal from '@/components/login-modal'

export default {
  components: {
    CartControl,
    LoginModal
  },
  data() {
    return {
      selectedIndex: 0,
      activity_list: [
        [
          {
            icon: require('../../../static/img/activity-1.png'),
            text: '满50减5,满100减15,满200减35'
          },
          {
            icon: require('../../../static/img/activity-2.png'),
            text: '20起送,满35免配送费'
          }
        ],
        [
          {
            icon: require('../../../static/img/activity-3.png'),
            text: '1积分可以抵扣0.5元'
          }
        ]
      ],
      banner: [
        {
          bannerPic: require('../../../static/img/banner/banner1.png')
        },
        {
          bannerPic: require('../../../static/img/banner/banner2.png')
        },
        {
          bannerPic: require('../../../static/img/banner/banner3.png')
        }
      ],
      recommonedList: [
        {
          foodPic: require('../../../static/img/commend-food-list/food_14.png'),
          foodName: '上海生煎',
          salesNum: 22,
          foodPrice: 5.0
        },
        {
          foodPic: require('../../../static/img/commend-food-list/food_3.png'),
          foodName: '麻辣火锅',
          salesNum: 100,
          foodPrice: 30.0
        },
        {
          foodPic: require('../../../static/img/commend-food-list/food_7.png'),
          foodName: '剁椒鱼头',
          salesNum: 50,
          foodPrice: 30.0
        },
        {
          foodPic: require('../../../static/img/commend-food-list/food_11.png'),
          foodName: '孜然烤串',
          salesNum: 1000,
          foodPrice: 3.0
        },
        {
          foodPic: require('../../../static/img/commend-food-list/food_18.png'),
          foodName: '肉夹馍',
          salesNum: 500,
          foodPrice: 12.0
        }
      ],
      menuNavList: ['香锅', '捞饭', '套餐', '盖浇饭', '面食', '小炒', '饮料'],
      menuList: [
        {
          title: '香锅',
          list: [
            {
              foodPic: require('../../../static/img/food-list/food_1.png'),
              foodName: '肥牛香锅',
              salesNum: 500,
              foodPrice: 15.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_2.png'),
              foodName: '肥羊香锅',
              salesNum: 300,
              foodPrice: 15.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_3.png'),
              foodName: '腿排香锅',
              salesNum: 300,
              foodPrice: 15.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_4.png'),
              foodName: '里脊香锅',
              salesNum: 300,
              foodPrice: 15.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_5.png'),
              foodName: '烤鸭香锅',
              salesNum: 300,
              foodPrice: 15.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_6.png'),
              foodName: '什锦香锅',
              salesNum: 300,
              foodPrice: 13.0
            }
          ]
        },
        {
          title: '捞饭',
          list: [
            {
              foodPic: require('../../../static/img/food-list/food_6.png'),
              foodName: '肥牛金针菇捞饭',
              salesNum: 500,
              foodPrice: 15.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_7.png'),
              foodName: '肥羊金针菇捞饭',
              salesNum: 300,
              foodPrice: 15.0
            }
          ]
        },
        {
          title: '套餐',
          list: [
            {
              foodPic: require('../../../static/img/food-list/food_8.png'),
              foodName: '腿排香锅 + 可乐',
              salesNum: 500,
              foodPrice: 18.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_9.png'),
              foodName: '肥羊金针菇捞饭 + 可乐',
              salesNum: 300,
              foodPrice: 18.0
            }
          ]
        },
        {
          title: '盖浇饭',
          list: [
            {
              foodPic: require('../../../static/img/food-list/food_12.png'),
              foodName: '农家小炒肉',
              salesNum: 500,
              foodPrice: 18.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_13.png'),
              foodName: '糖醋排骨',
              salesNum: 300,
              foodPrice: 18.0
            }
          ]
        },
        {
          title: '小炒',
          list: [
            {
              foodPic: require('../../../static/img/food-list/food_16.png'),
              foodName: '片儿川',
              salesNum: 500,
              foodPrice: 13.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_17.png'),
              foodName: '过桥米线',
              salesNum: 300,
              foodPrice: 18.0
            }
          ]
        },
        {
          title: '面食',
          list: [
            {
              foodPic: require('../../../static/img/food-list/food_14.png'),
              foodName: '片儿川',
              salesNum: 500,
              foodPrice: 13.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_15.png'),
              foodName: '过桥米线',
              salesNum: 300,
              foodPrice: 18.0
            }
          ]
        },
        {
          title: '饮料',
          list: [
            {
              foodPic: require('../../../static/img/food-list/food_10.png'),
              foodName: '可乐',
              salesNum: 20,
              foodPrice: 3.0
            },
            {
              foodPic: require('../../../static/img/food-list/food_11.png'),
              foodName: '雪碧',
              salesNum: 20,
              foodPrice: 3.0
            }
          ]
        }
      ],
      currentIndex: 0,
      loginModalVisible: false
    }
  },
  created() {},
  computed() {},
  methods: {
    login() {
      if (!wx.getStorageSync('token')) this.loginModalVisible = true
    },
    handleChange(e) {
      this.currentIndex = e.target.current
    },
    linkToDetail() {
      wx.navigateTo({ url: './food-detail/main' });
    },
    linkToSeller() {
      wx.navigateTo({ url: './seller-detail/main' });
    },
    hideLoginModal() {
      this.loginModalVisible = false
    },
  }
}
</script>

<style lang="stylus" scoped>
  $color-primary = #ffd200
  .header
    position relative
    width 100%
    height 90px
    .bulletin
      position absolute
      left 0
      top 0
      padding-left 112px
      width 100%
      height 30px
      line-height 30px
      font-size 13px
      background-color #ffd200
    .activity
      position absolute
      top 30px
      left 0
      padding-left 112px
      width 100%
      height 50px
      .wx-swiper
        box-sizing border-box
        height 50px
        .wx-wiper-item
          font-size 13px
          .item-content
            padding-top 6px
            .icon
              vertical-align top
              margin-right 5px
              width 18px
              height 18px
    .avatar
      position absolute
      left 15px
      top 0
      width 80px
      height 80px
      border-radius 6px
      background-color #fff
      box-shadow 0px 0.5px 8px #c2c2c2
  .bannerSwiper
    width 100%
    height 150px
    .bannerItem
      height 150px
      img
        position absolute
        width 100%
        height 110px
        border-radius 7px
        opacity 0.7
        top 13%
        &.active
          opacity 1
          height 130px
          border-radius 9px
          top 7%
          transition all .2s ease
  .recommended-prods
    margin 10px 12px
    .title-wrapper
      border-left 3px solid $color-primary
      .title
        padding 0 10px
        font-size 16px
        font-weight bold
      .title-en
        font-size 12px
        color #999999
    .re-prods-wrapper
      margin 12px 0
      width 100%
      height 185px
      white-space nowrap
      .re-prod-list
        position relative
        vertical-align top
        margin 0 3px
        display inline-block
        width 111px
        height 180px
        box-shadow 0px 2px 5px #c2c2c2
        border-radius 2px
        .foot-info-wrapper
          position absolute
          left 0
          top 0
          width 100%
          height 100%
          .food-pic
            width 100%
            height 111px
            border-radius 2px
          .food-name
            padding-left 3px
            font-size 15px
            font-weight bold
          .sales-num
            padding-left 4px
            font-size 12px
            color #999999
          .food-price
            padding-left 3px
            font-size 15px
            font-weight bold
            color #fb1c35
        .cart-control-wrapper
          position absolute
          right 0
          bottom 2px
  .foods-menu
    position relative
    margin-top 20px
    height 520px
    .menu-nav-list
      position absolute
      top 0
      left 0
      width 80px
      height 540px
      background-color #f1f1f1
      .nav-item
        display block
        width 80px
        height 50px
        line-height 50px
        text-align center
        font-size 16px
        border-bottom 0.5px solid #ffffff
        &.selected
          background-color #ffffff
    .menu-content-wrapper
      position absolute
      top 0
      left 90px
      width 280px
      height 200px
      display none
      &.selected
        display block
      .menu-content-title
        margin-bottom 10px
        padding 0 10px
        font-size 16px
        border-left 3px solid $color-primary
      .menu-content-list
        height 500px
        .food-item
          position relative
          display block
          height 100px
          border-bottom 0.5px solid #f1f1f1
          &:first-child
            border-top 0.5px solid #f1f1f1
          .food-pic
            position absolute
            left 0px
            top 5px
            width 90px
            height 90px
          .food-info-wrapper
            position absolute
            top 5px
            left 110px
            width 200px
            height 90px
            .food-name
              margin-bottom 5px
              font-size 15px
              font-weight bold
            .sales-num
              margin-bottom 16px
              font-size 12px
              color #999999
            .food-price
              font-size 18px
              font-weight bold
              color #fb1c35
          .cart-control-wrapper
            position absolute
            right 5px
            bottom 9px
</style>
