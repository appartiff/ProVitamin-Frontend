<template>
  <a class="icon-button">
    <div class="icon-box">
      <span v-if="cartCount > 0" class="cart-counter">
        {{cartCount}}
      </span>
      <slot name="icon"></slot>
    </div>

    <span>{{text}}</span>
  </a>
</template>

<script>
  export default {
    props:
      {
        text: String,
        cartCount: {
          type: Number,
          default: 0
        }
      }

  }
</script>

<style lang="scss" scoped>

  @import '~/assets/styles/variables/_variables.scss';
  
  span {
    color: $color--light-shades;
    user-select: none;
  }
  .cart-counter {
    position: absolute;
    border-radius: 50%;
    top: -3px;
    width: 22px;
    height: 22px;
    left: 30px;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    justify-content: center;
    z-index: 1;
    font-size: 1rem;
    transition: all .2s ease-in-out;
    background-color: $color--dark-accent;
  }
  .icon-box {
    width:40px;
    height:40px;
    background: #50546D;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.5em!important;
    position: relative;
  }
  @media #{$desktop} {
    padding: 0 1em!important;
  }
  .icon-button:hover .icon-box{
    background: $color--light-accent;
  }

  svg {
    display: block;
    font-size: 1.2em;
    height: 1em;
    width:1em!important;
    color: #fff;
  }
</style>
