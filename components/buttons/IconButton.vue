<template>
  <a class="icon-button">
    <slot name="icon"></slot>
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

  @import '~/assets/styles/variables/_colors.scss';
  @import '~/assets/styles/variables/_fonts.scss';
  
  span {
    color: $color--light-shades;
  }
  .icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1em;
  }

  svg {
    font-size: 1.2em;
  }
</style>
