<template>
  <div class="cart-control" :style="{transform: cartScale}">
    <img class="sub-icon" v-if="cartNum" @click.stop="sub" src="../../static/img/sub-icon.png" alt="">
    <p v-if="cartNum" class="cart-num">{{cartNum}}</p>
    <img class="add-icon" @click.stop="add" src="../../static/img/add-icon.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartNum: 0
    }
  },
  props: {
    size: 1
  },
  methods: {
    sub() {
      if (!wx.getStorageSync('token')) this.$emit('login')
      else if (this.cartNum > 0) this.cartNum --
    },
    add() {
      if (!wx.getStorageSync('token')) this.$emit('login')
      else this.cartNum ++
    }
  },
  computed: {
    cartScale() {
      return `scale(${this.size})`
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart-control
  position relative
  width 70px
  height 22px
  .sub-icon
    position absolute
    left 0
    top 0
    width 22px
    height 22px
  .add-icon
    position absolute
    right 0
    top 0
    width 22px
    height 22px
  .cart-num
    position absolute
    left 22px
    top 0
    width 26px
    height 22px
    line-height 22px
    text-align center
    font-size 15px
</style>
