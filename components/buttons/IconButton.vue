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
      },
    computed:
      {
        appIcon() {
          return this.icon;
        }
      }
  }
</script>

<style scoped>
  .icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 6em;
  }

  svg {
    font-size: 1.2em;
  }
</style>
