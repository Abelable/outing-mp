<template>
  <div>
    <radio-group class="address-lists">
      <div class="address-list">
        <div class="main-part">
          <div class="i-radio">
            <radio color="#ffd200"/>            
          </div>
          <div class="address-info">
            <p class="personal-info">
              <span class="name">张三</span>
              <span class="tel">15869035014</span>
            </p>
            <p class="address-detail">浙江省杭州市余杭区闲林街道竹海水韵流霞苑9-1-502</p>
          </div>
        </div>
        <div class="bottom-part">
          <div class="info-edit">
            <img src="../../../../static/img/edit.png" alt=""> 
            <span>编辑</span> 
          </div>
          <div class="info-edit">
            <img src="../../../../static/img/delete.png" alt=""> 
            <span>删除</span>
          </div>
        </div>
      </div>
      <div class="address-list">
        <div class="main-part">
          <div class="i-radio">
            <radio color="#ffd200"/>            
          </div>
          <div class="address-info">
            <p class="personal-info">
              <span class="name">张三</span>
              <span class="tel">15869035014</span>
            </p>
            <p class="address-detail">浙江省杭州市余杭区闲林街道竹海水韵流霞苑9-1-502</p>
          </div>
        </div>
        <div class="bottom-part">
          <div class="info-edit">
            <img src="../../../../static/img/edit.png" alt=""> 
            <span>编辑</span> 
          </div>
          <div class="info-edit">
            <img src="../../../../static/img/delete.png" alt=""> 
            <span>删除</span>
          </div>
        </div>
      </div>
    </radio-group>
    <div class="add-address" @click="linkTo">
      <img src="../../../../static/img/add.png" alt="">
      <span>新增地址</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    linkTo() {
      wx.navigateTo({ url: './edit-address/main' })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .address-list
    margin-bottom 10px
    .main-part
      margin-bottom 1px
      padding 10px 15px 10px 10px
      display flex
      align-items center
      height 100px
      background-color #ffffff
      .i-radio
        flex 0 0 35px
        radio 
          transform scale(0.8)
      .address-info
        flex 1
        .personal-info
          margin-bottom 6px
          font-size 16px
          clear right 
          .name
            font-weight 500
          .tel
            float right
        .address-detail
          font-size 15px
    .bottom-part
      display flex
      align-items center
      justify-content flex-end
      height 50px
      line-height 50px
      color #666666
      font-size 16px
      background-color #ffffff
      .info-edit
        flex 0 0 75px
        text-align center
        img
          vertical-align middle
          margin-right 5px
          width 20px
          height 20px
        span
          vertical-align middle
  .add-address
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    line-height 50px
    background-color #ffd200
    text-align center
    font-size 16px
    font-weight 600
    img
      vertical-align middle
      margin-right 8px
      width 16px
      height 16px
    span
      vertical-align middle
</style>
<style lang="stylus">
  page
    background-color #f4f5f9
</style>