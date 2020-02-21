<template>
  <a class="icon-button">
    <slot name="icon"></slot>
    <span class="text--color--light-shades">{{text}}</span>
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

<style scoped>
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
