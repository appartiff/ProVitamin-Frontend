<template>
  <a class="icon-button">
    <div class="icon-box">
      <slot name="icon"></slot>
    </div>
    <span>{{text}}</span>
  </a>
</template>

<script>
  export default {
    props:
      {
        text: String
      }
  }
</script>

<style lang="scss" scoped>

  @import '~/assets/styles/variables/_variables.scss';
  
  span {
    color: $color--light-shades;
    user-select: none;
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
    padding: 0 1em;
  }
  .icon-button:hover .icon-box{
    background: $color--light-accent;
  }

  svg {
    display: block;
    font-size: 1.2em;
    height: 1em;
    width:1em!important;
  }
</style>
