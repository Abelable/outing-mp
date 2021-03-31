<template>
  <div>
    <div class="input-list">
      <p class="label-tip">姓名</p>
      <input class="i-input" type="text" placeholder="输入姓名">
    </div>
    <div class="input-list">
      <p class="label-tip">手机</p>
      <input class="i-input" type="number" placeholder="输入手机号">
    </div>
    <div class="picker-list">
      <p class="label-tip">选择地区</p>
      <picker class="i-picker" mode="region">
        <span>省份</span>
        <span>城市</span>
        <span>区县</span>
      </picker>
    </div>
    <div class="textarea-list">
      <p class="label-tip">详细地址</p>
      <textarea class="i-textarea" type="text" placeholder="输入详细地址" />
    </div>
    <div class="save-btn">保存</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  .input-list
    margin-bottom 1px
    display flex
    height 50px
    background-color #ffffff
    .label-tip
      padding-right 15px
      flex 0 0 90px
      height 50px
      line-height 50px
      font-size 16px
      font-weight 500
      text-align right
    .i-input
      flex 1
      height 50px
      font-size 16px
  .picker-list
    margin-bottom 1px
    display flex
    height 50px
    background-color #ffffff
    .label-tip
      padding-right 15px
      flex 0 0 90px
      height 50px
      line-height 50px
      font-size 16px
      font-weight 500
      text-align right
    .i-picker
      flex 1
      height 50px
      line-height 50px
      font-size 16px
      span
        padding-right 35px
  .textarea-list
    display flex
    background-color #ffffff
    .label-tip
      padding-right 10px
      flex 0 0 85px
      height 50px
      line-height 50px
      font-size 16px
      font-weight 500
      text-align right
    .i-textarea
      margin-top 6px
      flex 1
      height 65px
      font-size 16px
  .save-btn
    margin 50px auto
    width 90%
    height 50px
    line-height 50px
    border-radius 5px
    text-align center
    font-size 16px
    font-weight 500
    background-color #ffd200
</style>
<style lang="stylus">
  page
    background-color #f4f5f9
</style>